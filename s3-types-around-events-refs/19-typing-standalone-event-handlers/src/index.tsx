import ReactDOM from 'react-dom';
// Import the EventComponent so we can use it within the App component below which is the parent component.
import EventComponent from './events/EventComponent';

// Show the `EventComponent` component on the screen.
const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
