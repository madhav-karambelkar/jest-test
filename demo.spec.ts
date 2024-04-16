import { sum ,isGreater, throwError , getData} from "./demo";

const repeatedOutcome = [
    { i : 1 , a: 3 , outcome: 4},
]
describe("DEMO TS", () => {
  it("Should sum the value", () => {
    expect("3").toBe(3);
  });
  
  it("check 4 is greater than 8", () =>{
    expect(isGreater(8,4)).toBeTruthy()
  })

  it("should be null or undefined", () => {
    expect(undefined).toBeUndefined()
  })

  const items = ["Dog" , "Cat" ,  "Sheep"]
  it("should contains `Dog`", ()=>{
    expect(items).toContain("Dog")
  })

  it("should throw error msg",()=>{
    expect(throwError).toThrow("ABC")
  })

  it("should return false when a is not 1", async() => {
    const res = await getData(3)
    expect(res).toThrow("ABC")
  })
});
