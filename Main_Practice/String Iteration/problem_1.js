// Write a function that accepts a string and returns the number of uppercase letters (A–Z) in the string.

function getUppercaseNum(str) {

  if (str.length === 0) return 0;
  let countUppercase = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      countUppercase++;
    }
  }
  
  return countUppercase;
}

let print = getUppercaseNum("Hello WORLD JavaScript");
console.log(print);
