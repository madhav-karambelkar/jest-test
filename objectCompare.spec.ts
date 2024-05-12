
import deepObjectComparison from './objectCompare';

describe('deepObjectComparison', () => {
    it('should return true for equal objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        expect(deepObjectComparison(obj1, obj2)).toBe(true);
    });

    it('should return false for different objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 3 } };
        expect(deepObjectComparison(obj1, obj2)).toBe(false);
    });

    it('should return false for objects with different keys', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 }, d: 3 };
        expect(deepObjectComparison(obj1, obj2)).toBe(false);
    });

    it('should return false for objects with different types', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: '1', b: { c: 2 } };
        expect(deepObjectComparison(obj1, obj2)).toBe(false);
    });
});


// test('Deep object comparison', () => {
//     const obj1 = {
//         a: 1,
//         b: {
//             c: 2,
//             d: [3, 4]
//         }
//     };
//     const obj2 = {
//         a: 1,
//         b: {
//             c: 2,
//             d: [3, 4]
//         }
//     };
//     expect(deepObjectComparison(obj1, obj2)).toBe(true);
// });

// test('Deep object comparison with different objects', () => {
//     const obj1 = {
//         a: 1,
//         b: {
//             c: 2,
//             d: [3, 4]
//         }
//     };
//     const obj2 = {
//         a: 1,
//         b: {
//             c: 2,
//             d: [3, 5] // Different value here
//         }
//     };
//     expect(deepObjectComparison(obj1, obj2)).toBe(false);
// });
