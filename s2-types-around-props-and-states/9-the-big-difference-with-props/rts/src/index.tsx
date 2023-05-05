/*
 Note: This is just react syntax and we can still display the plain text inside of the heading 1.
The file extension needs to be `tsx` as we are using react with TS.
*/

// 1) Import ReactDOM library
import ReactDOM from 'react-dom';

// 2) Create a component
const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};
// 3) Show the component on the screen.
ReactDOM.render(<App />, document.querySelector('#root'));
