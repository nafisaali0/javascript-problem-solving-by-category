// Write a function that accepts an array of numbers and returns a new array containing the square of each number.

function getSquareNumArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  let storeSquareNumArr = [];

  for (let i = 0; i < arr.length; i++) {
    let squareEachNum = arr[i] * arr[i];
    storeSquareNumArr.push(squareEachNum);
    // storeSquareNumArr.push(arr[i] * arr[i]);
  }

  return storeSquareNumArr;
}

let print = getSquareNumArr([2, -3, 4, 0, 5]);
console.log(print); //[4, 9, 16, 0, 25]
