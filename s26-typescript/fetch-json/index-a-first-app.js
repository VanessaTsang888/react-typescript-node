'use strict';
exports.__esModule = true;
/*
We always write TS code inside of '.ts' files.
1. import that axio module that we've installed.
2. past the dummy data -> one item from list. create a variable named url and assign it the url address. We are using axios to make an network request to that url.
3. Print out the JSON data we get back which should be the x1 To Do item.
4. Run the entire code.
We can't run TS code directly inside of browser or with node.js. We have to compile this into plain JS, then we can execute the resulting JS code.
To compile our code we need to access the compiler using this cmd: tsc
then the name of the file we want to compile: index.ts
Now, we have the complied version which is: index.js

*/
var axios_1 = require('axios');
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// use axios to make an network request to that url. Pass in the url to the get() function. This will make a http get request to that url and attempt to fetch that JSON data.
// To get a notification on when the request is complete, we can change on a then statement that will
// This entire operation is async, so by calling axios.get() we're going to receive a promise in return that will be called with the response once we get a response from that API.
// Print out the JSON data we get back which should be the x1 To Do item.
axios_1['default'].get(url).then(function (response) {
  console.log(response.data);
});
