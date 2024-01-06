/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let chars1 = str1.toLowerCase().split("")
  let chars2 = str2.toLowerCase().split("")
  chars1.sort()
  chars2.sort()
  // console.log(chars1, chars2)
  if (chars1.length != chars2.length) {
    return false
  }
  if (chars1.join() != chars2.join()) {
    return false
  }
  return true
}

// isAnagram("hello", "hello!")
module.exports = isAnagram;
