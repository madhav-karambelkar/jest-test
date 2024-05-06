//Addition of two array elements
const addArrays = (arr1 : Array<number>, arr2: Array<number>) => {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length for addition.");
  }
  return arr1.map((value, index) => value + arr2[index]);
};

//Subtraction of two array elements
const subtractArrays = (arr1 : Array<number>, arr2 : Array<number>) => {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length for subtraction.");
  }
  return arr1.map((value, index) => value - arr2[index]);
};

//Multiplicatio of two array elements
const multiplyArrays = (arr1: Array<number>, arr2:Array<number>) => {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length for multiplication.");
  }
  return arr1.map((value, index) => value * arr2[index]);
};

//Transpose a 2D array
const transposeArray = (arr: number[][]) => {
  if (!Array.isArray(arr) || !arr.every((row) => Array.isArray(row))) {
    throw new Error("Input must be a 2D array.");
  }
  const rowCount = arr.length;
  const colCount = arr[0].length;
  const transposed : number[][] = [];
  for (let col= 0; col < colCount; col++) {
    transposed.push([]);
    for (let row= 0; row < rowCount; row++) {
      transposed[col].push(arr[row][col]);
    }
  }
  return transposed;
};

export { addArrays, subtractArrays, multiplyArrays, transposeArray };
