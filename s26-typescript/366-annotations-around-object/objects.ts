/**************************************************************************************************
// An object to create a profile for a person. 
// With nested object of coordinates (latitute and longitute properties) to represent the 
// person's location in the world.
// With a method that will change the age of this person using the JS ES2015 for defining 
// a method inside of an object. 
***************************************************************************************************/

// Without annotations:
/*
const profile = {
  name: 'vanessa',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age) {
    this.age = age;
  }
}
*/

// With annotation:
const profile = {
  name: 'vanessa',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};


// Destructing out the age property - without annotations.
/* 
Without destructuring:
const age = profile.age;
*/

/*
With destructuring: on the left, we are creating a variable of age.
const { age } = profile;
*/

/* 
With annotations: 
When we want to use Destructuring, we have to write out the expected structure of our profile object on the right hand side.
Therefore, list out the structure of profile object such as the properties we want it to have.
On the left, we are creating a variable of age.
*/
// const { age, name }: { age: number; name: string } = profile;

/*
Destructure out the latitute and longitute properties using the normal ES15 syntax.
*/
// Without annotations:
// const { coords: { lat, lng } } = profile;

/* 
With annotations:
Looks complex so split over multiple lines. The annotation is between the first colon and the equals oporator.
*/
const {
  coords: { lat, lng }
 }: { coords: { lat: number; lng: number } } = profile;
