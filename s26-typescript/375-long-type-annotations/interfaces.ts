// Define an object that represents a car.
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};


// Define a func that operates on the oldCivic object.
// A func that will take-in the oldCivic object and printout some properties about it. 
// Will return nothing as just logout certain data of the vehicle object, hence the void keyword.
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`)
};

// Call printVehicle func and pass-in oldCivic
printVehicle(oldCivic);