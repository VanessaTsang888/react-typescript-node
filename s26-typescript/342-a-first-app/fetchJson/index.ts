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

axios.get(url).then(response => {
  console.log(response.data);
});
