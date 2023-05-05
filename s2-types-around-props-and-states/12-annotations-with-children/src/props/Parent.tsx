/***********************************************************************
import 'ChildAsFC' rather than child. Then update our JSX.


************************************************************************/

// Import Child from Child using a set of braces as we going to use Child as named export rather default export.
import { ChildAsFC } from './Child';

// In the Parent return an instant of Child.
// Update with callback func of 'onClick'
// content inside of Children component React will be provided to your component as a prop called 'children'.
// Update 'Child' to 'ChildAsFC'.
const Parent = () => {
  return <ChildAsFC colour='baby-pink' onClick={() => console.log('Clicked')}>
  blur blur blur
  {/* <App /> */}
  </ChildAsFC>;
  
};

// Export default Parent at the bottom.
export default Parent;

