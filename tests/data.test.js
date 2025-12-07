/**
 * @fileoverview Tests for Class and Race data integrity
 */

const Classes = require('../src/data/classes');
const Races = require('../src/data/races');

describe('Data Integrity', () => {

  describe('Classes Schema', () => {
    it('should have 13 classes', () => {
      expect(Object.keys(Classes).length).toBe(13);
    });

    Object.values(Classes).forEach(cls => {
      describe(`${cls.name}`, () => {
        it('should have basic properties', () => {
          expect(cls).toHaveProperty('name');
          expect(cls).toHaveProperty('color');
          expect(cls).toHaveProperty('specs');
        });

        it('should have at least 2 specs', () => {
          expect(Object.keys(cls.specs).length).toBeGreaterThanOrEqual(2);
        });

        Object.values(cls.specs).forEach(spec => {
          describe(`Spec: ${spec.name}`, () => {
            it('should have panicRow with 8 slots', () => {
              expect(spec).toHaveProperty('panicRow');
              const slots = Object.keys(spec.panicRow);
              expect(slots.length).toBe(8);
              expect(slots).toEqual(['1', '2', '3', '4', '5', '6', '7', '8']);
            });

            it('should have non-empty values for all slots', () => {
              Object.values(spec.panicRow).forEach(val => {
                expect(val).toBeTruthy();
                expect(typeof val).toBe('string');
              });
            });

            it('should have [Racial] in slot 7', () => {
              expect(spec.panicRow['7']).toBe('[Racial]');
            });

            it('should have Combat Pot in slot 8', () => {
              expect(spec.panicRow['8']).toBe('Combat Pot');
            });
          });
        });
      });
    });
  });

  describe('Races Schema', () => {
    it('should have at least 24 races', () => {
      expect(Object.keys(Races).length).toBeGreaterThanOrEqual(24);
    });

    Object.values(Races).forEach(race => {
      describe(`${race.name}`, () => {
        it('should have name and racial property', () => {
          expect(race).toHaveProperty('name');
          expect(race).toHaveProperty('racial');
          expect(race.racial).toBeTruthy();
        });
      });
    });
  });

  describe('Spot Checks', () => {
    it('Tauren should be War Stomp', () => {
      expect(Races.Tauren.racial).toBe('War Stomp');
    });

    it('Paladin Protection slot 1 should be Divine Shield', () => {
      expect(Classes.Paladin.specs.Protection.panicRow['1']).toBe('Divine Shield');
    });

    it('Mage Frost should exist', () => {
      expect(Classes.Mage.specs.Frost).toBeDefined();
    });

    it('Evoker Augmentation should exist', () => {
      expect(Classes.Evoker.specs.Augmentation).toBeDefined();
    });
  });
});
