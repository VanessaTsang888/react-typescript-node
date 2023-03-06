/***************************************************************************************** 
Fetch some JSON data and print out the results.
Use axios to make network req to this url which is just the first `todo` item 
and attempt to fetch that JSON data. This operation is async, so by calling axios.get 
we'll receive a Promise in return.
To get notification on when the req is complete, we can chain on a `then` statement 
that will be called with the response once we get a response from that API. 
Then logout the JSON we get back which should be the actual `todo` that we received 
back from that API.

Use the get() method on the `axios` object, chain on the `then` statement, pass-in 
the response arrow func and printout the data using the console.log() statement.
*****************************************************************************************/

import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

/* Define the Todo Object using TS. Each Todo will have 3 properties which we know from 
looking at the object at: https://jsonplaceholder.typicode.com/todos/1

*/
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/* 
To develop the report, pull off the  `id`, `title`, `completed` properties. Assign them to 
temp variables, insert them all into a string to print them out as multi-line string.
The value of `response.data` is going to be one of the `Todo`.
 */
axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed); // these parms MUST be in correct order as when func when it was declared and params passed into it.

});
// Type annotation: state what are the type for each property/flag/object that has been passed into this func.
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);

}
