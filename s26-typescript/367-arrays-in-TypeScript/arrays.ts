/* 367. Arrays in TypeScript */


/* Declare an array of strings and assign it to a variable.
** Type inference at work as TS can see there is strings inside of this array so we don't need write type annoation for 
this line of code. To check this just hover over the carMakers variable, we'll see:
** string[] */

// const carMakers = [ 'ford', 'toyota', 'honda' ];

/* If we initalise an empty array then we will need to write type annotation as TS don't have enough info to know what 
type of values will be inside the array, and we want to aviod the 'any type' as much as possible. */
const carMakers: string[] = [];

/* We can put complext objects inside of an array such as couple Date() object instances. */
const dates = [ new Date(), new Date() ];

/* We can write out two dimentional array using TS.
An array that contains arrays of strings. Since we have values inside array, we don't need to annotate.
To identify a 2D array when we hover over the variable: string[][]
*/
const carsByMake = [
  ['f150', 'fiesta'],
  ['corolla', 'yaris'],
  ['jazz', 'civic']
];
