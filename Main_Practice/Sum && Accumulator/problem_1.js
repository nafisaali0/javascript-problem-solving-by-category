// Write a function that accepts an array of numbers and returns the sum of all numbers in the array.


function sumAllNumbers(arr){

    let totalNumbers = 0;

    for(let i = 0; i<arr.length; i++){
        totalNumbers += arr[i];
    }

    return totalNumbers;

}

let print = sumAllNumbers([12, 5, -3, 8, 0]);
console.log(print)