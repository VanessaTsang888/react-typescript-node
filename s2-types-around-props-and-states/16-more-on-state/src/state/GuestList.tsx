import { useState } from 'react';

// Annotate this `GuestList` func as React Function Component as other JS frameworks also uses components.
const GuestList: React.FC = () => {
  // Type inference knows that the `name` piece of state will store values that are type of Strings as on the right we have initialised the hook with an empty String.
  const [name, setName] = useState('');
  // Need to annotate the hook on the right as type inference can't figur out what type of values will be stored in the `guests` piece of state which is also a variable.
  // Otherwise when we hover over the `guests` piece of state, we'll see the `any[]` which we should avoid since this is NOT best practice.
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
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

export default GuestList;
