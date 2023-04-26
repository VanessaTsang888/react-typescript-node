// Define an interface using the interface keyword and then a name for the new type that we are creating.
/* Deleted the extra props and no errors in this file as when we call the printVehicle func with the oldCivic 
passed in, it do satisify the Vehicle interface that says this type must have the summary func that returns a String.
Then TS check that the oldCivic object has a prop called summary that is a func and returns a string, yes it does.
So it don't matter that oldCivic has additional props. Now, this interface definition is much more condensed. */

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
};


// Define an object that represents a car.
// Change year property from a number to an instance of a Date object.
// Use the summary func from the interface.
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};


// Define a func that operates on the oldCivic object.
/* This func is only accessing the summary prop. Update Vehicle interface to Reportable. Rename this func from printVehicle 
to printSummary as this is more generic and makes more sense.  */
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Call printVehicle func and pass-in `oldCivic`
/* Update the name of this func since we changed the name of it above. */
printSummary(oldCivic);