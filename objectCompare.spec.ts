// deepObjectComparison.test.js
import deepObjectComparison from './objectCompare';

test('Deep object comparison', () => {
    const obj1 = {
        a: 1,
        b: {
            c: 2,
            d: [3, 4]
        }
    };
    const obj2 = {
        a: 1,
        b: {
            c: 2,
            d: [3, 4]
        }
    };
    expect(deepObjectComparison(obj1, obj2)).toBe(true);
});

test('Deep object comparison with different objects', () => {
    const obj1 = {
        a: 1,
        b: {
            c: 2,
            d: [3, 4]
        }
    };
    const obj2 = {
        a: 1,
        b: {
            c: 2,
            d: [3, 5] // Different value here
        }
    };
    expect(deepObjectComparison(obj1, obj2)).toBe(false);
});
