// Define an interface using the interface keyword and then a name for the new type that we are creating.
/* Use the Reportable interface to describe two very different objects as those two objects uses the summary prop which is a func that returns a string. */

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
};


// Define an object that represents a car.
/* This is considered to be Reportable type - interface. */
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

/* Define new object right below oldCivic object. The prop of summary is a func that will return a String, using back-ticks
as its ES6 - interpolation. This is considered to be Reportable type - interface.
  */
const drink = {
  colour: 'golden-brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${ this.sugar } grams of sugar`;
  }
};


// Define a func that operates on the oldCivic object.
/* This func is only accessing the summary prop. Update Vehicle interface to Reportable. Rename this func from printVehicle 
to printSummary as this is more generic and makes more sense so later we can call this generic func and pass-in the drink object
which will still make sense.  */
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Call printVehicle func and pass-in `oldCivic`
/* Both objects are of the Reportable type - interface */
printSummary(oldCivic);
printSummary(drink);