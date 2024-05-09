import {
  addArrays,
  subtractArrays,
  multiplyArrays,
  transposeArray,
} from "./arrayOperation";

beforeAll(()=> {
  console.log("Running test");
})

describe("Addition of two array elements.", () => {
  test("Both arrays may be []", ()=>{
    expect(addArrays([],[])).toEqual([])
  });

  test("Both arrays elements addition", ()=>{
    expect(addArrays([1,2,3],[4, 5, 6])).toEqual([5, 7, 9])
  });


});

describe("Subtraction of two array elements.", () => {
    test("Both arrays may be []", ()=>{
      expect(subtractArrays([],[])).toEqual([])
    });
  
    test("Both arrays elements Subtraction", ()=>{
      expect(subtractArrays([4, 5, 6],[1,2,3])).toEqual([3, 3, 3])
    });
  
  });

  describe("Multiplication of two array elements.", () => {
      test.skip("Both arrays may be []", ()=>{
        expect(multiplyArrays([],[])).toEqual([])
      });
    
      test("Both arrays elements Multiplication", ()=>{
        expect(multiplyArrays([1,2,3],[4, 5, 6])).toEqual([4, 10, 18])
      });
    
});

describe("Transpose of 2D array.", () => {
    test("arrays may be [[],[]]", ()=>{
      expect(transposeArray([[],[]])).toEqual([])
    });
  
    test("Both arrays elements addition", ()=>{
      expect(transposeArray([[1,2], [3,4]])).toEqual([[1,3], [2,4]])
    });
  
  });
