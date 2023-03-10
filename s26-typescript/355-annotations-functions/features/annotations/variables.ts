/***************************************************************************************** 
TYPE ANNOTATION IS INFO ABOUT THAT PARTICULAR VALUE THAT WE ARE ASSIGNING TO THE VARIABLE 
such as an array, a calss, an object literal, or a function.
It is NOT code that will get invoked or run. 
*****************************************************************************************/

/* 
apples will always refer to a number type.
If I declare apples variable with let rather than const then I can re-assign 
the variable to a different number late.
*/

// let apples: number = 5;


/* 
re-assign to a different number. If I try to assign this variable a different 
type of value such as a String I'll get an error which is what I should expect.
*/

// apples = 10;


// Re-assignments:
let apples: number = 5;

/* 
If I try to assign this variable a different type of value such as a Number then 
TS will throw an error by under lining the
variable in red line.
*/

let speed: string = 'fast';
let hasName: boolean = true;

// A value that is called same name as its type:
let nothingMuch: null = null;
let nothing: undefined = undefined;

/*
We can use annotations with Object Types too such as func's, arrays, classes, objects:
Built in Objects. We declare a variable that can ONLY have a type of Date and we going 
to assign it an instance of a date Object.
*/
let now: Date = new Date();

/*
Array with annoation:
*/

/* 
Use annotation when declaring a variable that is type of an Array of Strings.
 The annotation on the left is NOT creating an Array but stating that the 
 value stored in side of variable has the type of an Array.
*/
let colors: string[] = ['red', 'green', 'blue'];

// Use annotation when declaring a variable that is type of array of numbers.
let myNumbers: number[] = [1, 2, 3];

// Use annotation when declaring a variable that is type of array of booleans.
let truths: boolean[] = [true, true, false];

// Classes with annotation:
class Car {
}
/*
The type of value that we want to assign to variable car is the class of 
'Car' to make an instance of class 'Car'.
*/
let car: Car = new Car();

// Object Literal:
/*
Add in type annotation for an Object Literal.
We can only assign an Object to point that has an x property that's a number type, 
and an y property that's a number type as well.
*/

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

/*
 Annotations around functions:
 Annotation: I expect this fun to have an arguement of 'i' that is the type of number 
 and the value I expect this func to return is nothing so will use the type of void.
 The syntx on the right of the equals operator is the actual func we use to provide 
 the implementation.
*/
const logNumber: (i: number) => void = (i: number) {
  console.log(i);
};
