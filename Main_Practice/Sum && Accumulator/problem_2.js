// Write a function that accepts an array of numbers and returns the largest number in the array.

function findLargestNum(arr){

    if (arr.length === 0) return;

    let findLargest = arr[0];

    for(let i = 1; i<arr.length; i++){

        if(findLargest<arr[i]){
            findLargest = arr[i]
        }

    }

    return findLargest;
}

let print = findLargestNum([12, 5, 27, 8, 19, 3]);
console.log(print)