/*
The file extension needs to be `tsx` as we are using react with TS.
*/

// Import ReactDOM library.
// Import GuestList.tsx component.
import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';

// Define an App component.
// Inside of the JSX/ the return statement, show the < GuestList /> component.

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};
// 3) Show the component on the screen.
ReactDOM.render(<App />, document.querySelector('#root'));
