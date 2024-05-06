import {
  addArrays,
  subtractArrays,
  multiplyArrays,
  transposeArray,
} from "./arrayOperation";

describe("operations on arrays such as addition, subtraction, multiplication, and transpose.", () => {
//   test.each([[]])(
//     "adds $i + $a to equal $outcome",
//     (...args) => {
//       console.log("🚀 ~ describe ~ args:", args);
//     }
//   );
  test("Both arrays should be empty on addition", ()=>{
    expect(addArrays([1,2,3],[4, 5, 6])).toBe([5, 7, 9])
  });
});
