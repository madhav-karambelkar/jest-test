const { largestDifference } = require('./sum');

describe("largest difference", () => {
    test("finds the largest difference in the array", () => {
        expect(largestDifference([45, 20, 10, 100])).toBe(90);
    });

    test("finds the largest difference when all numbers are negative", () => {
        expect(largestDifference([-10, -20, -30, -5])).toBe(25);
    });

    test("returns 0 when array contains only one number", () => {
        expect(largestDifference([10])).toBe(0);
    });

    test("returns 0 when array is empty", () => {
        expect(largestDifference([])).toBe(0);
    });
});
