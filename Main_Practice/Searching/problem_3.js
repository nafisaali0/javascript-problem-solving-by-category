// Write a function that accepts an array of numbers and returns the smallest number in the array.

function getSmallestNum(arr) {
  let storeSmallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (storeSmallest > arr[i]) {
      storeSmallest = arr[i];
    }
  }
  return storeSmallest;
}

let print = getSmallestNum([14, 6, 25, 3, 11, 8]);
console.log(print);
