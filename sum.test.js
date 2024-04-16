const sum = require("./sum");

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

describe("Sum Tests", () => {
  // beforeAll(() => {
  //   console.log("BEFORE All");
  // });
  // beforeEach(() => {
  //   console.log("BEFORE EACH");
  // });
  // afterEach(() => {
  //   console.log("After EACH");
  // });
  // afterAll(() => {
  //   console.log("AFTER ALL");
  // });
  test.each([
    { i : 1 , a: 3 , outcome: 4},
  
  ])("adds $i + $a to equal $outcome", (...args) => {
    console.log("🚀 ~ describe ~ args:", args);

    // expect(sum(args[0], args[1])).toBe(args[2]);
  });

  test.skip("adds 1 + 2 should equal 3", () => {
    expect(sum(2, 2)).toBe(4);
  });
  // test("compiling android goes as expected", () => {
  //   expect(() => compileAndroidCode()).toThrow();
  //   expect(() => compileAndroidCode()).toThrow(Error);
  // });
});
