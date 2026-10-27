// Write a function that accepts an array of strings and returns the longest string in the array.

function getLongestStrings(str) {
  if (str.length === 0) return;
  let storeLongest = str[0];
  for (let i = 1; i < str.length; i++) {
    if (storeLongest.length < str[i].length) {
      storeLongest = str[i]
    }
  }
  return storeLongest;
}

let print = getLongestStrings(["apple", "mango", "grape"]);
console.log(print);
