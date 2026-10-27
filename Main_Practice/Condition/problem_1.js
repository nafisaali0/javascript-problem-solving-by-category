// Write a function that accepts a number and returns "Even" if the number is even, or "Odd" if the number is odd.

function getEvenOddNum(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let print = getEvenOddNum(12);
console.log(print);
