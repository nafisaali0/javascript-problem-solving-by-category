// Write a function that accepts an array of numbers and returns a new array containing only the even numbers.

function getEvenNumArr(arr){

    let storeEvenNumArr = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            storeEvenNumArr.push(arr[i])
        }
    }

    return storeEvenNumArr;

}

let print = getEvenNumArr([12, 5, 27, 8, 19, 4, 0, -6]);
console.log(print);