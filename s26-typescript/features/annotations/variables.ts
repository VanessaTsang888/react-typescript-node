let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Object Types: built in objects example
// Declare a variable and name it: now
// that has a type of Date assign it of an instance of a Date object:
let now: Date = new Date();

// 333: Object Literal Annotations:
// Array: write an type annotations of an Array of strings:
// Telling TS that we're going to assign an array indicated by the squre brackets that's going to contain nothing but strings inside of it.
// We're going to have something assigned to colors that is of type array that contains strings. Just indicating a type not assigning the
// variable an Array.
// On the right hand side of the equals opporator we are assigning the variable colors an Array with 3 strings.
// Array: write an type annotations of an Array of numbers:
// Array: write an type annotations of an Array of booleans:

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
// add-in a type annotation with an instance of class car:
// I want to make an instance of class car. My type is cap C Car -> we're referring to the of class Car.
// The variable 'car', we are referring to an instance of a car.
// On the right handside of equals sign, we going to make a new Car and that's what creates our instance.
class Car {}
let car: Car = new Car();

// Add-in type annotations for an Object literal;
// What type of value we're going to assign to point.
// To indicate that we're going to assign an object that has an X property that's a number and a Y property
// that a number to the variable point, we use a colon then a set of braces and then list out all the different property
// names with the respective types right inside of that braces.
// We are saying we can only ever assign an object to point that has an x property that's a number, a y property that's a number.
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function:
// Add in type annotation for the variable logNumber which is also the name of this function:
// The annotation starts from the colon and up-to void.
// We are telling TS what type of value we are going to assign to this variable named logNumber and what different types of values this fn will return.
// We're telling TS that this fn will only ever take in a variable 1 that is the type of number and will return nothing hence the void.
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations:
// 1. function that returns the 'any' type:

// Define a JSON as a string, then pass that JSON. So write a variable named json, and assign it a JSON string.

/*
const json = '{ "x": 10, "y": }';
// Turn the string into an actual Object.
const coordinates = JSON.parse(json);
// Run the code by console.log it out:
console.log(coordinates); // {x: 10, y: 20};
*/

/* When we hover over coordinates, TS think its type of 'any'. Same for parse. So the JSON parse fn returns the 'any' type.
TS has no idea what type coordinates is and we need to use type annotation here.
What do the 'any' type mean?
TS don't know what we're going to get out of JSON parse as it depends entirely on the string that we put into that fn.
TS can't predict what we get back from the fn as it will be entirely different based upon the string we put in. 
TS will not try to figure to read the string and figure out what it would return if we if we call JSON parse.
So TS says: if you ever call JSON parse, your going to get back the 'any' type which means TS has no idea wht type of 
value is being returned from from JSON parse.
Aviod variable with 'any' at all costs TS can't help us with any type so we have to use type annotation for this.
*/

/*
337 Fixing the 'any' Type:
Add in type annotation for any is similar to how we added in annotation for Object Literal -> point.
So the colon after the variable, then the overal structure of that object.
*/

const json = '{ "x": 10, "y": }';
// add in type annotation as TS can't read the json string above and gave it a 'any' type.
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// TS will tell us that qwerty is not a property on that object hence the red underline:
coordinates.qwerty;
