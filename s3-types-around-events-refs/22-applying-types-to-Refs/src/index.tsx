import ReactDOM from 'react-dom';

import UserSearch from './refs/UserSearch';

// Display the UserSearch component on the screen
const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
