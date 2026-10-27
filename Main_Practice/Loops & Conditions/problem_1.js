// Write a function that accepts an array of numbers and returns the second largest distinct number in the array.

function getSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (secondLargest < arr[i] && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let print = getSecondLargest([12, 5, 27, 8, 19, 3]);
console.log(print);

// [12, 5, 27, 8, 19, 3]
// [10, 5, 8, 3]	8
// [7, 7, 5, 3]	5
// [-2, -5, -1, -8]
