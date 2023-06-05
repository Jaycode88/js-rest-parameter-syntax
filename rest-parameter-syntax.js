/**
 * To run this file in Terminal, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;  //this takes parameters a,b and c and then the arrow function adss the parameters together.
let sum = sumAll(1, 2, 3);
console.log("total:", sum)

// Extra arguments are ignored

const sum2 = sumAll(1, 2, 3, 4, 5, 6) // the numbers after 3 are ignored as the function only has 3 parameters a, b and c
console.log(sum2) // this still displays 6

// Function using ...rest
const sumRest = (a, b, c,...rest) => {    // now any extra parameters the function will squash into a new parameter called rest
    let sum = a + b + c;
    for(let i of rest){         // for of loop to iterate through the rest array
        sum += i;               // adds each additonal number to the original sum
    }
return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);  // call the function and pass it parameters
console.log(sum3)                      // logs correct answer of 21