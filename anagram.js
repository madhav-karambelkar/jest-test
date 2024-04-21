// Basically, an anagram is when you take all the letters of one word and rearrange
// them to make another word. But you have to use all the original letters exactly once.
//  It's like shuffling the letters to create a new word, but you can't add or remove any letters.

function isAnagram(str1, str2) {
  const cleanStr1 = str1.toLowerCase();
  const cleanStr2 = str2.toLowerCase();
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
