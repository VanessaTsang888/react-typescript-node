/*******************************************************************************************************************************
When web app first render on screen we want to focus inside the text input so that user can just start typing inside of it.
To develop this we need to write `useRef()` hook and type annotate it so we don't get errors.
We do this within the UserSearch component and within the text input located inside of the JSX block. 
*******************************************************************************************************************************/

// import the ref hook so we can so it in this component.
import { useState, useRef } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

// Inside of this component create a new ref called: inputRef as will assign it to that text input.
// Due to the error on the `inputRef` variable inside of the `ref` prop, we need to annotate this useRef() hook using the angle brackets.
// Inside angle brackets we apply a type that's going to describe of element that we going to give this ref off to.
// When this component first render on screen, TS don't know if this hook is going to be assigned to any element yet so we write the pipe operator and the value of `null`.
// Also, add the default value of null to initialise the hook with this empty value.
/*
The declaration on the right:
At some point in time this variable is pointing to might be of type `null` but other points in time it might point to an HTML input element.
*/
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  // The `inpuRef` is going down to our text input and we assign a prop called: `ref` to it. So `ref` is `inputRef`. 
  // We get an error as in the `UserSearch` func, that useRef() refers to an HTML element, we have to manually write type annotation here using the angle brackets.
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
