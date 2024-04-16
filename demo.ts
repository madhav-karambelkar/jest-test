const sum = (a: number, b: number) => {
  return a + b;
};

const isGreater = (a: number, b: number) => {
  return a > b;
};

const throwError = () => {
    throw new Error("ABC")
}

const getData = (a: number) => {
    return new Promise((res, rej)=>{
        if(a === 1) {
            res(true)
        }else throw new Error("ABC")
    })
}
export { sum ,isGreater, throwError, getData};
