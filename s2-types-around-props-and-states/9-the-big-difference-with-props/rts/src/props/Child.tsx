/***********************************************************************
 *** Child component that 
 *** Destructure to use the colour prop from the interface.
 *** Display that prop dynamically on the screen.
 *** In the Parent component > return statement > Child component 
 *** > update with colour prop from the interface.
 ************************************************************************/
// Define an interface called ChildProps to describe all different props we expect this child component to recieve.
interface ChildProps {
  colour: string;
};

/* Add in a props param and annotate it as ChildProps */
// export const Child = (props: ChildProps) => {
//   return <div>Hi Vanessa!</div>
//  };

// Usually we don't receive the whole props param but just get particular props out that we want to 
// access inside of component, so we use Destructuring syntx, such as destructure out colour by itself.
// Make use of colour prop inside of div.
export const Child = ({ colour }: ChildProps) => {
  return <div>{ colour }</div>;
};
