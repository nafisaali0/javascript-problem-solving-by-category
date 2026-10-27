// Write a JavaScript function that accepts an array of numbers and returns how many times the largest number appears in that array.

function getLargestFrequency(arr) {
  let largest = -Infinity;
  let countLargestAppears = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
      countLargestAppears = 1;
    } else if (arr[i] === largest) {
      countLargestAppears += 1;
    }
  }
  return countLargestAppears;
}

let print = getLargestFrequency([4, 9, 2, 9, 7, 9]);
console.log(print);

// [4, 9, 2, 9, 7, 9]
// Expected: 3

// [5, 5, 3, 2, 5]
// Expected: 3

// [-2, -5, -2, -8]
// // Expected: 2

// [10, 4, 6, 8]

// [4, 9, 2, 9, 7, 9])
// 3
