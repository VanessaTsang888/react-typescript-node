/**************************************************************************************
How to add other types of values to a props interface definition: 
Inside of ChildProps interface, we want to communicate down some additional 
 prop like a callback func.
 Our Child component has a button inside and we want to tell the parent componenet 
 about whenever a user clicks on those buttons.
 Destructure out of our color props object the onClick func.
 Update interface with the onClick callback func so no need for params, don't need to
 return any kind of value so return type is 'void'.
 Now update the Parent component
 ************************************************************************************/
// Define an interface called ChildProps to describe all different props we expect this child component to recieve.
interface ChildProps {
  colour: string;
  onClick: () => void;
  children?: React.ReactNode;
};

// Onclick prop to dynamically display the onclick data.
// Destructure out of our color props object the onClick func
export const Child = ({ colour, onClick }: ChildProps) => {
  return (
    <div>
      {colour}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

// Destructure out of our color props object the onClick func
// children object as in Parent component we have content inside of the 'ChildAsFC' component.
export const ChildAsFC: React.FC<ChildProps> = ({ colour, onClick, children }) => {
  return (
    <div>
      {colour}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

// Now can use the dot notation syntax
ChildAsFC.displayName;