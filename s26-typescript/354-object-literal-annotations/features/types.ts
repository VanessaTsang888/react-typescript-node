// The idea of Types is an easy way to refer to the different properties + func's that a value has.
// Everything we assign to a variable has a type.

// The type this variable has is: Date. Now TS can decide what we can do with this variable.
// So when we use this variable with period at the end, we get a pop-up with options which are list of
// properties and funcs that a date object has. 
const today = new Date();
today.getMonth();
// If we try to reference one that doesn't exist, we'll get an errormsg.
today.qwerty;

const person = {
  age: 20
};

// create a class
class Color {
...
};

const red = new Color();



