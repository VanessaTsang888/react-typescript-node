// Define an interface using the interface keyword and then a name for the new type that we are creating.
// Now we can replace the long type annotation within the `printVehicle` func with just our `Vehicle` interface/variable.
// Change year property from a number to an instance of a Date object as interfaces can take not only primitive types but also
// more complex types such as objects and func's such as a `summary` func thar returns a string.
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
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
// A func that will take-in the oldCivic object and printout some properties about it. 
// Will return nothing as just logout certain data of the vehicle object, hence the void keyword.
// The long type annotation within this func now replace with just our `Vehicle` interface variable.
// In order to call this `printVehicle` func, we must pass in an object that meets the spec provided by the 
// `Vehicle` interface. Display the data inside of the summary func.
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`)
};

// Call printVehicle func and pass-in `oldCivic`
// TS will look at the `oldCivic` object and make sure that it satisfies the `Vehicle` infterface by going
// through each properties and the values for each one.
printVehicle(oldCivic);