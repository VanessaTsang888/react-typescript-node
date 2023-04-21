// Define an interface using the interface keyword and then a name for the new type that we are creating.
// Now we can replace the long type annotation within the `printVehicle` func with just our `Vehicle` interface/variable.

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
};


// Define an object that represents a car.
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};


// Define a func that operates on the oldCivic object.
// A func that will take-in the oldCivic object and printout some properties about it. 
// Will return nothing as just logout certain data of the vehicle object, hence the void keyword.
// The long type annotation within this func now replace with just our `Vehicle` interface variable.
// In order to call this `printVehicle` func, we must pass in an object that meets the spec provided by the 
// `Vehicle` interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`)
};

// Call printVehicle func and pass-in `oldCivic`
// TS will look at the `oldCivic` object and make sure that it satisfies the `Vehicle` infterface by going
// through each properties and the values for each one.
printVehicle(oldCivic);