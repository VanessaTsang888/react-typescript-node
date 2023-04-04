// From preview lecture:

// Don't need to write annotation as type inference knows what type values will go inside this array.
const carMakers = ['ford', 'toyota', 'honda'];

// An array can contain complex objects such as multiple Date() instances. 
const dates = [new Date(), new Date()];

// Can write an 2D array:
const carsByMake = [
  ['f150', 'fiesta'],
  ['corolla', 'yaris'],
  ['jazz', 'civic'],
];


/*
1. TS can do type inference when extracting values from an array.
One benefit of making use of arrys in TS.
*/

/* Help with inference when extracting values.
If we want to pull an element out of the carMakers array by using the pop() method or the direct index access, 
TS will know that we are going to be pulling out a string and help us with type inference. 
Take carMakers and do an index access to it, I can hover over car variable and see that type inference is working
 - TS knows that this variable is going to be a string. It knows that carMakers is an array of strings and we 
 just pulled one value out of it which is the element in location 0 - arrays are zero based.
 Also works with pop() method. So when we call pop() its going to return an instance of a string. We can hover 
 over myCar and see can see TS has correctly inferred that my car is going to be a string.
*/
// pulled one value out of carMakers array which is the element in location 0 - the first element.
const car = carMakers[0];

// Chain on the pop method to the carMakers array:
const myCar = carMakers.pop();

/*
2. TS can prevent us from adding incompatible values to the array.
Prevent incompatible values:

If we try to push an element into the carMaker array that is not a string (we already declared and assigned it 
array of strings), then we'll see an error - the param will be underlined in red. TS is telling us the collection
should only be strings. If we want to have multiple different types in an array, we can but need to use some 
special syntax to do so.

*/

carMakers.push(100);


/*
3. We can get help with 'map', 'forEach', 'reduce' func's.
When we declared an array, we get to use the built-in funcs such as map, forEach, reduce etc when we are iterating 
over a collection of elements. 
*/

/*  Help with 'map'.
This func will be called with every element in the array. Receive each car as a string and from this will 
return a string as well. So take the car and return it immediately. So we annotate the param and the map
method too. Since TS knows that car will be a string we get a lot of different auto-complete on the variable 
that comes in here such all the methods that come with string type, i.e. 'toUpperCase' > 'car.toUpperCase'.
This is same with other methods such as forEach, reduce etc This is a nice benefit.
*/

carMakers.map( (car: string): string => {
  return car;
});

/*
4. Flexible - arrays can still contain multiple different types. 


*/

/* Flexible types:
This array contain different date values, some date objects and some strings.
Hover over the variable on left and will see this: importantDates: (string | Date) [] 

*/

// This is going to be an array that contains elements that are a string OR a date object.
// The pipe oportator is an OR statement for types. 
const importantDates = [new Date(), '2030-10-10'];

/*
If we want to specifically state that this array can contain multiple different types, we
need to add in manual annotation 
*/
const importantDates: (Date | string)[] = [new Date()];
// Use push method to push an element into the variable.

importantDates.push('2030-10-10');
importantDates.push(new Date());
// Will get an error as the element we trying to push is neither a string or a date object.
importantDates.push(100);

// Always annotate empty arrays to avoid the 'any type':
const importantDates: (Date | string)[] = [];



