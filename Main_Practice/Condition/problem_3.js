// Write a function that accepts a string and returns true if the string is a palindrome, or false otherwise.
// A palindrome is a word that reads the same forward and backward.

function detectPalindrome(str) {
  let storeStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    storeStr += str[i];
  }
  if (storeStr === str) {
    return true;
  } else {
    return false;
  }
}

let print = detectPalindrome("madam");
console.log(print);
