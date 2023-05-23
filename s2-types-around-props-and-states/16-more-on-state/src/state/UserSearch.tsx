// This is a simple form for a user to search for a name. If the name exists then the name will be printed on the screen. 
// Otherwise, plain text of: Person not found.

// To make use of the useState hook we need to import it from react.
import { useState } from 'react';

// An array with multiple objects. Each object is a person and some info about them.
const persons = [
  { name: 'Nick', age: 20, isVegan: false },
  { name: 'Amy', age: 20, isVegan: false },
  { name: 'David', age: 20, isVegan: true },
  { name: 'Steve', age: 20, isVegan: true },
];

// Annotate its type as React Function Component.
// When user click the btn, we'll search for whatever name is in the input field.
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');

  // Inside this func we take a look at the persons array and find one with a mathing name.
  const onClick = () => {};

  // JSX syntax.
  // Whenever user types into input field, the callback func will recieve the event element, update our name piece of state by calling the setName() func.
  // by calling `setName()` func with `e.target.value` is passed in as the param.
  // Btn has `onClick` prop that dynamically displays the data inside of the onClick func.
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} /> 
      <button onClick={onClick}>Find Person</button>
    </div>
  );
};

// To use this component in other files we have to export this component.
export default UserSearch;
