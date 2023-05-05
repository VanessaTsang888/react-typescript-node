/***********************************************************************
*** Parent component that shows the Child component.
*** Assign couple of props to the Child to see how it works with TS.
************************************************************************/

// Import Child from Child using a set of braces as we going to use Child as named export rather default export.
import { Child } from './Child';

// In the Parent return an instant of Child.
const Parent = () => {
  return <Child />;
};

// Export default Parent at the bottom.
export default Parent;

