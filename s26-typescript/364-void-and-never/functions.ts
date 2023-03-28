/* Annotations Around Functions:
** The value to are going to assign to the variable declaration on the left. */
/*
// Before annotation on an arrow func:
const add = (a, b) => {
  return a + b;
};

// After annotation the same func:
// Annotation both the params and the actual func itself.
const add = (a: number, b: number): number => {
  return a + b;
};
*/

/* Inference Around Functions:
1. Annotation all params.
2. Annotate what the func will return.

*/

/* If we return a string when we had stated we'll return a number, then we'll get a 
red underline advising us that we have an error or bug. */

// const add = (a: number, b: number): number => {
//   return "Some plain text here";
// };

//  TS will not make sure we have the correct logic code inside of the func.
// Therefore, for the output part of func we add in type annotation in case we miss-out the return keyword from the return statement.

// Annotation an arrow func:
// const subtract = (a: number, b: number) => {
//   return a - b;
// };


// Annotations for a named Functions:
// Defineg the func keyword at the start of the func. 
// function divide(a: number, b: number): number {
//   return a/b;
// };

// Works for Anonymous Functions that is assigned to a variable:
// Annotate this func.
// const multiply = function(a: number, b: number): number {
//   return a * b;
// }

// Void and Never:
// No return statement as we just want to logout the message variable or object that has been
// passed into the logger func and is of type String. Therefore, we use the type of void as our annotation

const logger = (message: string): void => {
  console.log(message);
};

// Use the type-of: never
// when we'll never reach the end of this func.
// So we'll never going to execute the func completely at some point
// in time inside of here, we going to throw an error and exit the func early without returning any value.
// There is a chance we'll never reach the end of a func.
const throwError = (message: string): void => {
  if(!message) {
    throw new Error(message);
  }
};