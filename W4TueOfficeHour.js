// Write a recursive function that given a number returns the sum of integers from 1 to that number. 
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0. rSigma(1)
// Math.floor(3.5) -> 3
function rSigma(n) {
    n = Math.floor(n);
    // Base Case
    // We do not need this if statement because the base case and recursive step account for n = 1
    // if(n === 1) {
    //     return 1;
    // }
    if(n < 1) {
        return 0;
    }
    // Recursive Step
    return rSigma(n-1) + n;
}

console.log(rSigma(5));
console.log(rSigma(2.5));
console.log(rSigma(-1));
console.log(rSigma(1));