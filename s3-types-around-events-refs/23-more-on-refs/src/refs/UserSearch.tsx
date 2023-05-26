/*
Last lecture we written our `inputRef` variable.
When our component first render on screen we will focus that text input by using this `ref`. To make sure we run some code when our component first is rendered on the screen, we'll make sue of the `useEffect` hook as well.

*/

// 1. Import `useEffect` hook at top of the component file.
import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  // Run some code when component first renders on screen.
  // Do a cehck: If `inputRef` is not defined then we'll return early from `useEffect`. This is a negative case but we can do it the other way round which is positive case.
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus(); // Hover over `current`, TS: yes this is definately going to refer to input element as we already checked that the `inputRef.current` is NOT null.
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

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
