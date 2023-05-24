/******************************************************************************************************************* 
The Task:
Define an `onChange()` callback where we define onChange itself as a separate func, in a separate component file
called: `EventComponent.tsx`.

The type for this component is: React Function Component.
Event object abbreviated as `e`.
Error on `e`: Parameter 'e' implicity lhas an 'any' type.
We want to avoid the 'any' type.
Why we see this error here when we didn't when we had this event object within our return method statement > JSX?
********************************************************************************************************************/

// Provide the event object as the param when writting this func.
// Test it in the browser with `console.log(e);` to check the events object is what we expect.
const EventComponent: React.FC = () => {
  const onChange = (e) => {
    console.log(e);
  };

  // `onChange()` callback is NOT defined inline but separatly above.
  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

// Need to export this component so it can be used in other files.
export default EventComponent;
