const isAnagram = require("./anagram");

test("isAnagram function correctly identifies anagrams", () => {
  expect(isAnagram("Listen", "Silent")).toBe(true);
});
test("isAnagram function correctly identifies non-anagrams", () => {
  expect(isAnagram("hello", "world")).toBe(false);
});
test("isAnagram function with different lengths", () => {
  expect(isAnagram("hello", "helloo")).toBe(false);
});
test("isAnagram function with special characters", () => {
  expect(isAnagram("a!bcd", "dcba!")).toBe(true);
});
test("isAnagram function with numbers", () => {
  expect(isAnagram("12345", "54321")).toBe(true);
});
test("isAnagram function with whitespace", () => {
  expect(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")).toBe(true);
});
test("isAnagram function with blank data", () => {
  expect(isAnagram("", "hello")).toBe(false);
});
test("isAnagram function with Unicode characters", () => {
  expect(isAnagram("😊🎉", "🎉😊")).toBe(true);
});
