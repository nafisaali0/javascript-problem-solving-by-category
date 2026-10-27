// Problem:
// Write a function that accepts a string and returns the total number of vowels in that string.
// For this problem, vowels are a, e, i, o, and u. Count both lowercase and uppercase vowels.

function getVowels(str) {
  let totalNumOfVowels = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      "A" === str[i] ||
      "a" === str[i] ||
      "E" === str[i] ||
      "e" === str[i] ||
      "I" === str[i] ||
      "i" === str[i] ||
      "O" === str[i] ||
      "o" === str[i] ||
      "U" === str[i] ||
      "u" === str[i]
    ) {
      totalNumOfVowels += 1;
    }
  }

  return totalNumOfVowels;
}

let print = getVowels("Hello World");
console.log(print);
