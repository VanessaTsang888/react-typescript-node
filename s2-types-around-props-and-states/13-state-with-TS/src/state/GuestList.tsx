/************************************************************************* 
Party guest list web app:
Write the component.
Export it at the bottom.
Show this component inside of index.tsx file.
****************************************************************************/

/* 
To track whatever user types into input we need to add in a piece of state so we the useState hook

Annotate component with React.FC but without any angle brackets 
sice we don't expect to receive any props. Return a simple div 
element to display a little simple plain text.
*/

import { useState } from 'react';

const GuestList: React.FC = () => {
  // Add in a piece of state using useState hook and initialise it with empty string.
const [ name, setName ] = useState('');

//  Add an input element and a button element. onChange callback 
//  and a value prop. To track this we add in a piece of state - useState hook.
//  Whenever our onChange callback func is called we'll update our setName piece of state.
  return (
    <div>
      <h3>Vanessa's Big Birthday Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button></button>
    </div>
  );
};

// Export this component so we can use it inside of components for files.
export default GuestList;