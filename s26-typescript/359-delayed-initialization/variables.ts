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
} 

 
// When to use annotations: 
/*  
1) Function that returns the 'any' type:
When we mouse-over coordinates variable we see the type-of any. Same with parse.
This means the JSON.parse() func returns the any type.

1. declare variable and assign an object to it.
2. Turn above string into a JSON format Object.
3. Logout coordinates variable:
4. Mouse over coordinates variable and notice TS thinks that coordinates is of type 'any'. Same when we mouse over
the JSON.parse() func. This means the JSON.parse() func the 'any' type. 
*/
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); 
// console.log(coordinates); // {x: 10, y: 20};
/*
5. What do the 'any' type mean?
`JSON.parse('5')`
We can pass in different strings into this func and we can get back very different value types.
So when diagram shows that anytime we call JSON.parse() we get back some very different value types but TS doesn't know what we're going
to get out of this func as it depends on the string we put in that func - TS can't predict what we'll get back from that func so TS will 
give us the 'any' type.
'Any' type means TS can't do any error checking around that value.
If we call a property from an object that don't exist then TS will tell us this is an error 
*/
/*
coordinates variable is of type 'any' as TS can't predict what JSON func is going to return.
To fix this we add in a type annotation for this variable which is Object.

*/
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json); 
console.log(coordinates); // {x: 10, y: 20};

/* When we declare a variable on one line and initalize it later.
Write a for loop to iterate through the Array. If find a word or a string equal to green, then set foundWord to true.
The foundWord variable is underlined in grey to state a problem so we need to add a type annotation of a boolean. Or
assign it to false so TS knows what is going on.
*/
let words = ['red', 'green', 'blue'];
let foundWord; // Mannually give this a type annotation or assign it false.

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true;
  }
}


