/******************************************************************************************************************* 
The Task:
We are going to figure out why we are getting an error msg from the `e` from when we write our onChange func at the 
top but not when we define the same func directly inline on the onChange prop. This is due to the type inference system 
in TS and how it works. 

TS has a tool called type inference to figure out what types are floating around your app. 

If we hover over the onChange prop within JSX block, we can see TS knows what type this is. It understands its a prop, 
and that we are required to provide some kind of callback func to it.
********************************************************************************************************************/

// Rename from `e` to `event`. Then apply a type to event object.
// The type is taken from the required type of onChange() func
const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

// Need to export this component so it can be used in other files.
export default EventComponent;
