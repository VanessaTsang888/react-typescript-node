# Javascript Arrays

An array in JS are really an object with index:

```js
const nums = [ 12, 27, 17, 03 ];
{
  0: 12, 
  1: 27,
  2: 17,
  3: 03
};
```

## What is the difference between a for-loop and a for-each-loop?
***For loop:***
- Can break out early if want to. Example, we keep iterating until we find the num 5 to breakout of the loop early.
- Just use the `break` keyword.

***For-each method***
 - is a higher order func that takes in a higher order func which is a callback func. 
 - Used to iterate over the elements themselves rather than their indexes. 
 - Any JS method are rigid. They will iterate over every element from front to back regardless, no way to breakout early, no way to skip elements, start at half way point.
 - With methods we can chain them. map(), filt# er() and reduce() can auto return a new array but for-each doesn't return anything.

 ***For-of-loop***
 - New ES6.
 - Can breakout early using the `break` keyword.
 - Loop of array with the for-of syntax.
 - For each num variable, we multply by 2 and push in to our new array. Then return new array.
 - Will start iterating from front to back unless we want to breakout early.

 ***Which Do I Use?***
 If we want to potentially breakout of loop early at some point, then we use either a for-loop or a for-of-loop.
 If we need to fine tune or customise such as loop backwards, only need to loop over part of an array starting from middle element or loop over every other element, then use a for-loop and tweak the 3 inner parts.
 Only use a for-of loop if want to iterate front to back and potientally need to breakout, don't need to work with the indexes within the elements themselves.

 ### When to use a map() method
 - JS methods are higher order func's.
 - Use when we take a set number of data elements, do something with it and return the results.
 - Example, map over an array of three nums, multiply each num by 2 and push the new array in to the newArray variable. Then return that newArray variable.
 - So whenever we have same number comparison, this is when we use the map() method.