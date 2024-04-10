// Creat a class means we creating a blueprint or a definition of what a vehicle should be.
// This class has no arguments and return type of void as we not returning anything.
// a quick console log to test out this class - see if it works as expected.

class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

/*
We don't call the method in the calss directly. Instead we going to use a class to create 
an instance of a class to do so. 
Call the method `drive()` 
*/
const vehicle = new Vehicle();
vehicle.drive(); // With this instance of a class we have access to all the methods we defined in the class `Vehicle`.
vehicle.honk();
