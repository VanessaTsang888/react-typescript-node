"use strict";
/*****************************************************************************************
Fetch some JSON data and print out the results.
Use axios to make network req to this url which is just the first `todo` item
and attempt to fetch that JSON data. This operation is async, so by calling axios.get
we'll receive a Promise in return.
To get notification on when the req is complete, we can chain on a `then` statement
that will be called with the response once we get a response from that API.
Then logout the JSON we get back which should be the actual `todo` that we received
back from that API. This is the entire program so we just need to run it. First compile
this file into vanilla JS, then execute the resulting JS code. Access the compiler:
$ tsc index.ts
index.js will appear in our file explorer which is our compiled version of our index.ts
xx

Use the get() method on the `axios` object, chain on the `then` statement, pass-in
the response arrow func and printout the data using the console.log() statement.
*****************************************************************************************/
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
