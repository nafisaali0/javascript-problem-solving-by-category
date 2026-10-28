// Write a JavaScript function that accepts an array of numbers and returns how many times the largest number appears in that array.

function getLargestFrequency(arr) {

  let largest = -Infinity;
  let countLargestAppears = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
      countLargestAppears = 1
    } else if (largest === arr[i]) {
      countLargestAppears += 1;
    }
  }

  return countLargestAppears;
}

let print = getLargestFrequency([4, 9, 2, 9, 7, 9]);
console.log(print);
