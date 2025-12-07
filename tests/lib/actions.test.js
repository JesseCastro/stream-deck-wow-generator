/**
 * @fileoverview Tests for actions.js - specifically the text() helper
 */

const { text, hotkey, back, action } = require('../../src/lib/actions');

describe('text action helper', () => {
  it('should create a valid text action with all required fields', () => {
    const result = text({
      title: 'Skull',
      message: '/tm 8',
    });

    // Required Stream Deck fields
    expect(result).toHaveProperty('ActionID');
    expect(result).toHaveProperty('LinkedTitle');
    expect(result).toHaveProperty('Name');
    expect(result).toHaveProperty('Settings');
    expect(result).toHaveProperty('State');
    expect(result).toHaveProperty('States');
    expect(result).toHaveProperty('UUID');
  });

  it('should use correct UUID for text action', () => {
    const result = text({ title: 'Test', message: 'hello' });
    expect(result.UUID).toBe('com.elgato.streamdeck.system.text');
  });

  it('should set Text and SendEnter in Settings', () => {
    const result = text({ title: 'Marker', message: '/tm 7' });
    expect(result.Settings.Text).toBe('/tm 7');
    expect(result.Settings.SendEnter).toBe(true);
  });

  it('should set the title in States', () => {
    const result = text({ title: 'Cross', message: '/tm 7' });
    expect(result.States[0].Title).toBe('Cross');
  });

  it('should include image path when provided', () => {
    const result = text({
      title: 'Star',
      message: '/tm 1',
      image: 'Star.png'
    });
    expect(result.States[0].Image).toBe('Images/Star.png');
  });

  it('should have ActionID as static zero UUID', () => {
    const result = text({ title: 'Test', message: 'hello' });
    expect(result.ActionID).toBe('00000000-0000-0000-0000-000000000000');
  });
});

describe('hotkey action helper', () => {
  it('should create valid hotkey action with all required fields', () => {
    const result = hotkey({
      title: 'Mount',
      hotkey: {
        KeyCmd: false,
        KeyCtrl: false,
        KeyOption: false,
        KeyShift: false,
        KeyModifiers: 0,
        NativeCode: 46,
        QTKeyCode: 77,
        VKeyCode: 46
      }
    });

    expect(result).toHaveProperty('ActionID');
    expect(result).toHaveProperty('LinkedTitle');
    expect(result).toHaveProperty('UUID');
    expect(result.UUID).toBe('com.elgato.streamdeck.system.hotkey');
  });
});

describe('back action helper', () => {
  it('should create valid back action with correct UUID', () => {
    const result = back('Back.png');

    expect(result.UUID).toBe('com.elgato.streamdeck.profile.backtoparent');
    expect(result.States[0].Image).toBe('Images/Back.png');
  });

  it('should work without image', () => {
    const result = back();

    expect(result.UUID).toBe('com.elgato.streamdeck.profile.backtoparent');
    expect(result.States[0].Image).toBeUndefined();
  });
});
