const isAnagram = require("./anagram");

test("isAnagram function correctly identifies anagrams", () => {
  expect(isAnagram("Listen", "Silent")).toBe(true);
});
