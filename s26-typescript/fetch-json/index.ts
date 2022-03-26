/*
325: Catching More Errors!
Take the console.log() and put in a separte helper function named logTodo() leaving the promised body more compact.
This logTodo() will take-in the 3 variables, id, title, completed.
Then called logTodo() from above the function within the promise body and it will call the fn for us. For the arguments,
pass-in the 3 variables.
For each argument of the logTodo() we want to add-in a type annotation/TS syntax which will highlight errors as we write our code.
so for the id variable, whatever, we pass-in here, it must be a number. The title has to be a String. The completed has to be a boolean.
This is NOT writing an Object, instead we're just describing the type of variable that it's going to be.
Now we can see that error highlighed in red. Hover over the red underline, the error msg tells us that completed should be a boolean not a String but we
tried to pass it in as the second argument to the logTodo fn but that fn says the second argument has to be a String.
*/

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
// promise
axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  // Calling the logTodo function. TS is telling us that completed should be a boolean not a string, but we tried to passin a boolean as the second argument to the logTodo fn
  // but that second arg has to be a string.
  logTodo(id, completed, title);
});
// logTodo function with x3 variables passed-in and using type annotation/TS synatx to describe the type of each variable that it's going to be so that when we call this fn
// and pass-in these variables but make an mistake TS will highligh the error for us.
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`);
};
