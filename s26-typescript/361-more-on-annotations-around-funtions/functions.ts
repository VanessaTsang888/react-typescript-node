/* Annotations Around Functions:
** The value to are going to assign to the variable declaration on the left. */

// Before annotation on an arrow func:
const add = (a, b) => {
  return a + b;
};

// After annotation the same func:
// Annotation both the params and the actual func itself.
const add = (a: number, b: number): number => {
  return a + b;
};
