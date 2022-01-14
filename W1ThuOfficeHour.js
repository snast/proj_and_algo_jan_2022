/*


RIOT WALK
R- Restate/recap/read read read
I/O - Inputs/Outputs
T - Test Cases(Edge cases, may include use cases outside of the common case)
Walk - Psuedocode  + Actual coding when ready


https://www.codewars.com/kata/5571f712ddf00b54420000ee

Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, 
and returns a dictionary/hash which shows the least amount of coins used to make up that amount. 
The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). 
Therefor the dictionary returned should contain exactly 4 key/value pairs.

Input - amount in cents (ex: 23 cents, 120 cents, 0 cents, 2.3 -> 2 cents, 10.9 -> 10)

Output - dictionary/hash with the least amount of coins used
{ 
    'pennies': 0,
    'nickels': 0,
    'dimes': 0,
    'quarters': 0
    
}

Test Cases
Input : 23 cents
23 cents - dime = 13 cents
13 cents - dime = 3 cents
3 cents - pennies(3) = 0 cents
Output:
{ 
    'pennies': 3,
    'nickels': 0,
    'dimes': 2,
    'quarters': 0
    
}

Notes:

If the function is passed either 0 or a negative number, 
the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be be rounded down, 
and the resulting dictionary should never contain fractions of a coin.

Psuedocode
1) Initialize dictionary/hash with coin values = 0 (addresses the data structure returned)
2) Floor the input(in case it is a decimal) (addresses the float edge case)
3) If change >0, Some sort of loop (as long as we have change left, change>0, keep looping)
    a) Find biggest coin for current change value
    b) Subtract coin value to current change value
    c) Update change dictionary/hash
4) Return dictionary/hash

*/

function looseChange(cents) {
    var coins = { 
        'pennies': 0,
        'nickels': 0,
        'dimes': 0,
        'quarters': 0
    }
    if(cents > 0) {
        cents = Math.floor(cents);

        numOfQuarters = Math.floor(cents/25);
        coins['quarters'] = numOfQuarters;
        cents -= (numOfQuarters *25); // cents = cents - (numOFQuarters*25)

        numOfDimes = Math.floor(cents/10);
        coins['dimes'] = numOfDimes;
        cents -= numOfDimes *10;

        numOfNickels = Math.floor(cents/5);
        coins['nickels'] = numOfNickels;
        cents -= numOfNickels * 5;

        coins['pennies'] = cents;

    }

    return coins;

}

console.log(looseChange(23));
console.log(looseChange(23.7));
console.log(looseChange(99));
console.log(looseChange(0));
console.log(looseChange(-28));
