// deepObjectComparison.js
type deepObj = {
  a: number;
  b: {
    c: number;
    d: Array<number>;
  };
};

function deepObjectComparison<
  TObject1 extends object,
  TObject2 extends TObject1
>(
  obj1: TObject1 | TObject1[keyof TObject1],
  obj2: TObject2 | TObject2[keyof TObject2]
): boolean {
  // Check if both objects are not null
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // Check if both objects are objects
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  // Get the keys  of both objects
  const keys1 = Object.keys(obj1) as Array<keyof TObject1>;
  const keys2 = Object.keys(obj2) as Array<keyof TObject2>;

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and values are equal recursively
  for (let key of keys1) {
    const copyOfObj1 = { ...obj1 } as TObject1;
    const keyOfDataObj1 = copyOfObj1[key];

    const copyOfObj2 = { ...obj2 } as TObject2;
    const keyOfDataObj2 = copyOfObj2[key];

    if (!(key in obj2) || !deepObjectComparison(keyOfDataObj1, copyOfObj2)) {
      return false;
    }
  }

  return true;
}

export default deepObjectComparison;
