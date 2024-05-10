const { sumOfPrimes } = require('./sumOfPrimeNo'); // Assuming sumOfPrimes function is in a separate file

test('Sum of primes up to 10 should be 17', () => {
    expect(sumOfPrimes(10)).toBe(17);
});

test('Sum of primes up to 15 should be 77', () => {
    expect(sumOfPrimes(15)).toBe(41);
});

test('Sum of primes up to 50 should be 328', () => {
    expect(sumOfPrimes(50)).toBe(328);
});