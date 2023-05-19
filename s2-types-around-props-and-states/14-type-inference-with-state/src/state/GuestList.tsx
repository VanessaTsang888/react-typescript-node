/************************************************************************* 
Party guest list web app:
1. Write the component.
2. Export it at the bottom.
3. Show this component inside of index.tsx file.
****************************************************************************/

/* 
The two useState hooks are specific special functions.
TS is going to use type inference to guess what the type of state (the first element on the 
left that we destructure out from the hook) is. In the case of name, we provided a String as 
we passed-in a String into the hook so TS knows that its going to be a String. This is why the name state is not underlined in red so no error.
This is NOT the same for the second hook as we passed-in an empty array and TS has no idea what type of values will be stored in this array.
This is why we have to manually annotate the hook on the right with: <string[]>
See below for full line of code. We find this error when we call the setGuests() func inside the onClick() func if we don't annotate the second hook.
So by default TS trys to use type inference to figure out what type "guests" piece of state is but fails so we have to annotate that hook. We
know this when we hover over the "guests" piece of state and see the never[] type which we should avoid due to security reasons.
*/

// To update a piece of state, import useState hook
import { useState } from 'react';

const GuestList: React.FC = () => {
  // Add in a piece of state using useState hook and initialise it with empty string.
  const [name, setName] = useState('');
  // Two pieces of state destructured from the useState hook. Initialise with empty array as here we'll store our guests whom we'll invite to our party.
  // <string[]>: We have to annotate the right side so TS knows that the "guests" variable will contain values that are type of array of Strings. Otherwise, when we use this variable
  // later, we'll get an error from TS.
  const [guests, setGuests] = useState<string[]>([]);

  // All the logic we need to add a new guest.
  // take the current value of name, add it to our guests array, by calling setGuests func. setGuests() func, pass-in array of names as this will delete
  // any previous guests we've added into our app.
  // setGuests() > Take the current array of guests, take all the different strings out of it, add it to an new array, and then add it to a new array, and then add on name to the very end.
  const onClick = () => {
    setName(''); // Call setName by: empty out user data from the input field.
    setGuests([...guests, name]); // take current name, add or push to guests array by calling setGuests() func. First param is ensuring that the previous state is not being overwritten with the new name entry.
  };

  //  Add an input element and a button element. onChange callback
  //  and a value prop. To track this we add in a piece of state - useState hook.
  //  Whenever our onChange callback func is called we'll update our setName piece of state.
  // input element within this JSX, take whatever user has typed inside of here, add that as a new String into our guests array.
  return (
    <div>
      <h3>Vanessa's Big Birthday Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

// Export this component so we can use it inside of components for files.
export default GuestList;