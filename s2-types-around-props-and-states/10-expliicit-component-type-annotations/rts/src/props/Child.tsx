/***********************************************************************
 *** Another way we can set up a React component with TS.
 ************************************************************************/
// Define an interface called ChildProps to describe all different props we expect this child component to recieve.
interface ChildProps {
  colour: string;
};

// export const Child = ({ colour }: ChildProps) => {
//   return <div>{ colour }</div>;
// };

// Tell TS this is a React component. Name the component: ChildAsFC and give it type of: React.FC<...>
// The 'FC' is: function component, and pass in the interface.
export const ChildAsFC: React.FC<ChildProps> = ({ colour }) => {
  return <div>{ colour }</div>
};

// Now can use the dot notation syntax
ChildAsFC.displayName;