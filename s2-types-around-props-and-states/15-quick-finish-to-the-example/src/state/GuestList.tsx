/************************************************************************* 
Party guest list web app:
1. Write the component.
2. Export it at the bottom.
3. Show this component inside of index.tsx file.
****************************************************************************/

/* 
map over the guests piece of state which is also an element and display li element 
for every guest that we add to our Party Guest List.
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
  /* unordered list: map over the guests piece of state, display an li element for every guest that we add to our Party Guest List. 
  So for every guest return an li element that contains the name of the guest. Just use the guest name as the key. 
  */

  return (
    <div>
      <h3>Vanessa's Big Birthday Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

// Export this component so we can use it inside of components for files.
export default GuestList;