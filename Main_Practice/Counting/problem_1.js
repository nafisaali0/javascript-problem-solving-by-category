// Write a function that accepts an array of numbers and returns how many numbers in the array are even.

let arr = [20,4,5,100,69,99,23,37,0]
function getEvenNum(arr){

    let storeNumOfEven = 0;
    for(let i = 0; i < arr.length; i++){        
        if(arr[i] % 2 === 0){
            storeNumOfEven += 1
        }
    }

    return storeNumOfEven;
}

let print = getEvenNum(arr)
console.log(print);