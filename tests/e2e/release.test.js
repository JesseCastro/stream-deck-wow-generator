const fs = require('fs');
const path = require('path');
const os = require('os');
const { generateRelease } = require('../../src/scripts/generate-release');

// Mocks for data to prevent massive generation
const mockClasses = {
  TestClass: {
    name: 'TestClass',
    specs: {
      TestSpec: {
        name: 'TestSpec',
        rotation: { 1: 'Ability1' },
        panicRow: { 1: 'PanicAbility' }
      }
    }
  }
};

const mockRaces = {
  TestRace: {
    name: 'TestRace',
    racial: 'TestRacial'
  }
};

// Mock generateWoW to avoid dependency on real Classes/Races data
jest.mock('../../src/generators/wow', () => {
  return jest.fn().mockImplementation(() => ({
    mainProfile: {
      name: 'TestProfile',
      uuid: 'test-uuid',
      manifest: { Name: 'TestProfile', Pages: {} }
    },
    additionalProfiles: [],
    images: {},
    files: {
      'keybinds.txt': 'test keybinds',
      'install_keybinds.lua': 'print("test")'
    }
  }));
});

describe('E2E Release Generation', () => {
  let tmpDir;
  let tmpAssets;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wow-sd-release-'));
    tmpAssets = path.join(tmpDir, '_assets');
  });

  afterEach(() => {
    // Cleanup
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {
      // ignore
    }
  });

  it('should generate class hierarchy and profiles', async () => {
    // Mock console to reduce noise
    const spyLog = jest.spyOn(console, 'log').mockImplementation(() => { });
    const spyErr = jest.spyOn(console, 'error').mockImplementation(() => { });

    await generateRelease(tmpDir, tmpAssets, mockClasses, mockRaces);

    // Verify Hierarchy
    const classDir = path.join(tmpDir, 'TestClass');
    const specDir = path.join(classDir, 'TestSpec');
    const raceDir = path.join(specDir, 'TestRace');

    expect(fs.existsSync(classDir)).toBe(true);
    expect(fs.existsSync(specDir)).toBe(true);
    expect(fs.existsSync(raceDir)).toBe(true);

    // Verify Output Files
    const profileName = 'TestRace_TestSpec_TestClass.streamDeckProfile';
    expect(fs.existsSync(path.join(raceDir, profileName))).toBe(true);
    expect(fs.existsSync(path.join(raceDir, 'README.md'))).toBe(true);

    // Verify Top Level README
    expect(fs.existsSync(path.join(tmpDir, 'README.md'))).toBe(true);
    const readmeContent = fs.readFileSync(path.join(tmpDir, 'README.md'), 'utf-8');
    expect(readmeContent).toContain('TestClass');

    spyLog.mockRestore();
    spyErr.mockRestore();
  }, 20000); // 20s timeout
});
