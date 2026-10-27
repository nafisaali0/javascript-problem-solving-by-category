// Write a function that accepts an array of numbers and returns the average of all numbers in the array.
// The average is calculated by adding all the numbers and dividing the sum by the total number of elements.

function avgAllNum(arr){

    let totalNum = 0;

    for(let i = 0; i<arr.length; i++){

        totalNum += arr[i]
        
    }

    let avgAllNum = totalNum / arr.length

    return avgAllNum;
}


let print = avgAllNum([10, 20, 30, 40, 50]);
console.log(print)