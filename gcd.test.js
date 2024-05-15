const gcd = require("./gcd");

describe("gcd of two numbers", () => {
    test("gcd of two positive integers", () => {
        expect(gcd(20, 40)).toBe(20);
    });

    test("gcd of two negative integers", () => {
        expect(gcd(-20, -40)).toBe(-20); 
    });  

    test("gcd of zero and a positive integer", () => {
        expect(gcd(0, 30)).toBe(30); 
    });

    test("gcd of two prime numbers", () => {
        expect(gcd(17, 23)).toBe(1); 
    });

    test("gcd of a prime number and a non-prime number", () => {
        expect(gcd(13, 26)).toBe(1); 
    });   

    test("gcd of large non-prime numbers", () => {
        expect(gcd(1024, 4096)).toBe(1024); 
    });

    test("gcd of non-integer values", () => {
        expect(gcd("abc", "def")).toBeNaN(); 
    });  

    test("gcd with very large numbers", () => {
        expect(gcd(999999999999999999, 999999999999999998)).toBe(1); 
    });

});

