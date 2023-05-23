import ReactDOM from 'react-dom';
// Update this from GuestList to UserSearch component.
import UserSearch from './state/UserSearch';

// The entry point of this web app.
// Update this to show UserSearch component on the UI.
const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
