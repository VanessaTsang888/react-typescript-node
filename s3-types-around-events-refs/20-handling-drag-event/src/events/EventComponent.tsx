/****************************************************************************************************************
The Task:
Inside JSX block, write a div and use the onDragStart prop and inside that reference the onDragStart callback.
Above this block of code, define the onDragStart func and inside of a set of braces, use the console.log() 
statement to quickly logout or display a bit of plain text on the screen.
*****************************************************************************************************************/

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  // Receive event object as it containing info of the drag. We have to apply a type to this event object to remove the error.
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log("I'm being dragged");
    console.log(event);
  };

  // Inside of div element: attribute of `draggable`. Define Prop of `onDragStart` with a callback func of `onDragStart` being referenced 
  // to the `onDragStart()` func above.
  // When user clicks and drag on an element, this drag event get invoked. We can see the props and values for this when we inspect the UI.
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
