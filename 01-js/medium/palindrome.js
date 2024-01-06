/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let word = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
  let reversedWord = word.split('').reverse().join('')
  if (word != reversedWord) {
    return false
  }
  return true;
}

module.exports = isPalindrome;
