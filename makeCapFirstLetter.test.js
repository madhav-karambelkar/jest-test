const makeCapFirstLetter = require('./makeCapFirstLetter');

describe("make first letter capital", () => {
    test("capitalize first letter", () => {
        expect(makeCapFirstLetter('ankush')).toBe('Ankush');
    });
});