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
