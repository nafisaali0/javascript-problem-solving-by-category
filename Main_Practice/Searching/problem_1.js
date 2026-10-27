// Write a function that accepts an array of numbers and a target number. Return true if the target exists in the array; otherwise, return false.

function getTargetNum(arr, tNum) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (tNum === arr[i]) {
      return (result = true);
    }
  }
  return result;
}

let print = getTargetNum([12, 5, 27, 8, 19], 2);
console.log(print);
