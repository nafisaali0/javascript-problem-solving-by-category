// Problem: Write a function that accepts an array of numbers and a target number. Return the index of the target if it exists in the array. If the target does not exist, return -1.

function getTargetNum(arr, tNum) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (tNum === arr[i]) {
      return (result = i);
    }
  }
  return result;
}

let print = getTargetNum([10, 25, 8, 40, 15],4);
console.log(print);
