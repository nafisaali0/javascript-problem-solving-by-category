// Write a function that accepts an array of numbers and returns a new array containing only the positive numbers.

function getPositiveNumArr(arr) {

  if (arr.length === 0) {
    return [];
  }

  let storePositiveNumArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      storePositiveNumArr.push(arr[i]);
    }
  }

  return storePositiveNumArr;
}

let print = getPositiveNumArr([12, -5, 0, 8, -2, 15, 3]);
console.log(print); //[12, 8, 15, 3]
