// Remove Shorter Strings
// Given a string array, remove any strings shorter than the length from the array.

// ["Green", "Eggs", "and", "Ham"] -> ["Green", "Eggs"]
// ["Ham", "and", "Eggs", "Green"] -> ["Eggs", "Green"]

// iterate through the array -> should it be removed? y/n 
// n? move on!
// y? create a new array, push all GOOD values into new array, return new array 
// y? move BAD value to end of array, then pop 


// pop - removes the LAST elemnt in an array 

// arr.pop()
// arr.length = arr.length - 1

function removeSS(arr){
    let len = arr.length;
    for (let idx = 0; idx < arr.length; idx++){
        if (arr[idx].length < len){
            for(let y = idx; y < arr.length-1; y++){
                let temp = arr[y]; // a -> b
                arr[y] = arr[y+1]; // b -> c
                arr[y+1] = temp; // c -> a
            }
            arr.pop();
            idx--;
        }
    }
    return arr;
}

console.log(removeSS(["Ham", "and", "Eggs", "Green"]))