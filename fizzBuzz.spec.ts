const fizzBuzz = require("./fizzBuzz");

describe("FizzBuzz Tests", () => {
  it('returns "Fizz" if the number is divisible by 3', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it('returns "Buzz" if the number is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it('returns "FizzBuzz" if the number is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns the number itself if it's not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});
