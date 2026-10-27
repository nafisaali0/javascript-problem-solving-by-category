// Write a function that accepts a string and returns the string in reverse order.

function getReverseStr(str){

    let storeReverse = "";

    for(let i = str.length-1 ; i>=0; i--){
        // console.log(i)
        storeReverse += str[i]
    }
    return storeReverse;

}

let print = getReverseStr("JavaScript");
console.log(print);
