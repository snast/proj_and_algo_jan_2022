const performance = require('perf_hooks').performance;


// Factorial: A factorial is defined as the product of positive integers from 1 to n, 
// and it's written as "n!". For example:

// 1! = 1 = 0! (by definition, 0! = 1)
// 2! = 2*1 = 2 = 2*1!
// 3! = 3*2*1 = 6 = 3*2!
// 4! = 4*3*2*1 = 24 = 4*3!
// 5! = 5*4*3*2*1 = 120 = 5*4!
// Notice that n! = n*(n-1)!. So the problem can be broken up into a simpler case.

function factorial(n) {
    // Base Case
    // If n > 0 we know to keep calculating the factorial
    if (n < 2) {
        return 1;
    }
    //Recursive step to move towards the base case

    return n*factorial(n-1);
}
// factorial(5) = 5 * 4 * 3 * 2 * 1
// factorial(4) = 4 * 3 *2 * 1
// factorial(3) = 3 * 2 *1
// factorial(2) = 2 * 1
// factorial(1) = 1
// factorial(5) = 5 * 4 *3 *2 * 1


// x of n = x of n-1 + x of n-2
// x0 = 0
// x1 = 1
// x2 = x0 + x1 = 1
// x3 = x2 + x1 = 1 +1 = 2
// x4 = x3 + x2 = 2 + 1 = 3
// 0, 1, 1, 2, 3, 5, 8, 13, 21, .......
var count = 0;
function fibonacci(n) {
    // Base Case
    count++;
    if(n<2) {
        return n;
    }

    //Recursive Step
    return fibonacci(n-1) + fibonacci(n-2);
}
var startTime = performance.now();
console.log(fibonacci(25));
var endTime = performance.now();
console.log("Our fibonacci recursion function took " + (endTime - startTime) + " ms");

function fibIter(n) {
    if(n<2) {
        count++;
        return n;
    }
    var a = 0;
    var b = 1;
    var oldB = b;

    for(var i =2; i<n; i++) {
        count++;
        oldB = b;
        b = a + b;
        a = oldB;
    }

    return a + b;
}
var startTime = performance.now();
console.log(fibIter(25));
var endTime = performance.now();
console.log("Our fibonacci iter function took " + (endTime - startTime) + " ms");

function fibRecursionWithMemo(n) {
    var arr = [0,1];
    arr.length = n+1;
    function fib2Helper(num) {
        if(num<2) {
            return arr[num];
        }
        if(arr[num] == null) {
            //num = 5
            arr[num] = fib2Helper(num-1) + fib2Helper(num-2);
        }

        // [ 0, 1, 1, 2, null]
        

        return arr[num-1] + arr[num-2];
    }

    return fib2Helper(n);
}

var startTime = performance.now();
console.log(fibRecursionWithMemo(25));
var endTime = performance.now();
console.log("Our fibonacci recursive with memo function took " + (endTime - startTime) + " ms");