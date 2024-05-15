const fizzBuzz = require("./fizzBuzz");

describe("FizzBuzz Tests", () => {
  it('"Fizz" if the number is divisible by 3', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it('"Buzz" if the number is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it('"FizzBuzz" if the number is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("the number itself if it's not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});
