// Write a function that accepts a year and returns true if it is a leap year, or false otherwise.

function getEvenOddNum(num) {
  if (num % 400 === 0 || num % 4 === 0 && num % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

let print = getEvenOddNum(2023);
console.log(print);

