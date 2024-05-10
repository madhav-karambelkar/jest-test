const { sum, subtract } = require("./demoSum");

describe('Math operations', () => {
    it('adds 2 + 2 to equal 4', () => {
      expect(sum(2, 2)).toBe(4);
    });
  
    it('subtracts 4 - 2 to equal 2', () => {
      expect(subtract(4, 2)).toBe(2);
    });
  });