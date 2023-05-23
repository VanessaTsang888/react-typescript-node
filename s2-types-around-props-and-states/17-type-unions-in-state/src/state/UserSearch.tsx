/*********************************************************************************************************************** 
This is a simple form for our users to search for a name. If the name exists then the name will be printed on the screen. 
Otherwise, nothing will get printed.

The Objective:
For the second useState hook, tell TS the different possible types of value that we ever going to assign to this piece of state. 
******************************************************************************************************************************/

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
// To take the info of the person we found and printout on screen within our return method, we need a new piece of state `person`.
// For the second hook, there is 2 possbile types we are going to assign to a person.
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [person, setPerson] = useState<{
  name: string,
  age: number,
  isVegan: boolean
} | undefined>();


  // Inside this func we take a look at the persons array and find one with a mathing name.
  // Take the info of the person we found and print that out within our return method > JSX block. 
  // Initialise the `person` piece of state.
  const onClick = () => {
    const foundPerson = persons.find((person) => {
      return person.name === name;
    });
    // console.log(foundPerson); // undefined as expected.
    setPerson(foundPerson);
  };

  // JSX syntax.
  // Whenever user types into input field, the callback func will recieve the event element, update our name piece of state by calling the setName() func.
  // by calling `setName()` func with `e.target.value` is passed in as the param.
  // Btn has `onClick` prop that dynamically displays the data inside of the onClick func.
  // Second div element: Only access `user.name` if user is a truthy value. So if `person` is defined (if user types in a name that exists) then printout `user.name`. Otherewise don't print anything.
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find Person</button>
      <div>
        {person && person.name}
        <br />
        {person && person.age}
        <br />
        {person && person.isVegan}
      </div>
    </div>
  );
};

// To use this component in other files we have to export this component.
export default UserSearch;
