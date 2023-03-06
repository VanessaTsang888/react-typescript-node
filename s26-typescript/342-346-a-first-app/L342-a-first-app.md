# 342. A First App

**Task:**

Make a network request to fetch some JSON and print the result.
This app is to learn why we use TS in gerneral. So as we write this program we will accidentally introduce a couple of bugs into our app so we can see that TS has ability to catch those bugs while we write our code rather than when we execute our code.

## Steps

1. Take a look at the API we'll use to fetch data.
2. Create a new project directory.
3. Create a package.json file.
4. Install Axios to make a request using NPM moduel.
5. Write code.

Axios don't have anything to do with TS, we just going to use it to make a Network Request.

1. API: 
`jsonplaceholder.typicode.com`

Fake JSON API that servers up fake data that we can use just for like testing or learning purposes.

Method:
jsonplaceholder.typicode.com > Resources > types of records we can make a req or attempt to fetch from this api. We'll fetch from the list of: `/todos` > this will open the JSON formatted data on same window. My Chrome extension has formatted the data in JASON format for me. We going to make a Network req to this URL which is: https://jsonplaceholder.typicode.com/todos
We'll get back a whole list of fake todo list of items but we don't need the whole list, but just try to fetch one individual item. So we just modify the URL slightly > just at end of URL, add: /1
`https://jsonplaceholder.typicode.com/todos/1`
and will see this a single of todo on the screen:
```js
{
  userId: 1,
  title: "delectus aut autem",
  completed: false
}
```

We going return this in our terminal. 
1. Inside this dir, create our project > new dir: $ mkdir fetchJson
I'm using lower camel case naming convention as I feel it is more readable for me.
2. Change into that dir: $ cd fetchJson
3. Generate new JSON package file: $ npm init -y
4. Install Axios module so we can make network req: $ npm install axios
5. Open code editor: $ code .

I can see that in my package.json file there is the axios module there.
