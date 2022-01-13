// R – Recap
// First, just restate the problem back. Use your own wording, not the word-for-word description given. Demonstrate that you understand the problem (Pro tip: if an interviewer has a strong accent, this step is critical). Take the opportunity to ask clarifying questions – your interviewer will nod, contribute details, correct your description or otherwise reveal additional information.
// IO – Inputs and Outputs
// State a few inputs with their outputs. “For the IsOdd function, if I pass in 3, I expect true. For 6, I expect false. Am I thinking about that right?” Listen for confirmation, then move on.
// T – Test Cases
// Now you can channel your inner ETG*: in the whiteboard corner, list all the off-the-wall input parameters you can think of: negatives, non-integers, empty arrays, strings instead of arrays, really huge inputs, miraculously unlikely inputs, inputs that break the rules, missing parameters! For each of these, note the expected output (ask for clarification, if in doubt).
// The space between RIOT and WALK is when you actually write the code. Yep, you still need to do this!
// WALK – Walkthrough
// Finally, walk line-by-line through the code you just wrote, using your Test Cases from above. Make sure that all test cases return the required outputs before you say you are done.
// With RIOT WALK you articulate problems and solutions clearly, identify ambiguity, dig for clarity, create tricky test cases and methodically walk through your code. Interviewers will be impressed!
// *Evil Test Genius – the teammate that always knows how to break your code. Good software teams have at least one! You alternately fear, hate and admire this person, but always be glad s/he’s on your team! When you manage a software team someday, find your ETG and keep him/her happy!


// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

//Inputs/Outputs
// [4,2,1,3,5] -> [1,4,2,3,5]
// [4,3,2,1,-5] -> [-5, 4, 3, 2, 1]
// [4, 5, 6, 1, 1, 1] -> [1, 1, 1, 4, 5 6]
// [] - > []

// Psuedocode
// 1) Find the smallest element
//   - Set a mininum variable, min index
//    - loop through the array, update min if curr element is smaller and keep track of index
// 2) Shift all elements left of the smallest elem to the right
// 3) arr[0] = min

function minToFront(arr){
    var minIndex = 0;
    var minElem = arr[minIndex]; //arr[0]
    for(var index=0; index<arr.length; index++) {
        if(minElem > arr[index]) {
            minIndex = index;
            minElem = arr[minIndex]; //arr[index]
        }
    }

    for(var index2 = minIndex; index2>0; index2--){
        //shift everything left of minElem to the right
        arr[index2] = arr[index2-1];
    }

    //put min elem to the front
    arr[0] = minElem;

    return arr;
}

console.log(minToFront([4,2,1,3,5]));
console.log(minToFront([]));
console.log(minToFront([4,2,1,-3,5]));



