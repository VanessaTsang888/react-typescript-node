Section 26: TypeScript:
5hr, 40min

319: TypeScript Overview:
Vanessa's Key:
TS -> TypeScript
JS: Javascript
Command line -> cmd

What?
TypeScript (TS) code is JS with type annotations that help us catch errors.

It is writing Javascript: arrays, objects, functions, and ES2015 syntax: destructureing, error functions and classes. All this applies to Typescript as well. We are just adding a little additional syntax to handle something called the type system.

The TS Type System:

1. Helps us catch errors during development:
   As we writing our code, TypeScript is constanly analysing it and looking for bugs. If it finds bug it will pop open an error msg inside of our IDE. This is a signal to us the dev that we might want to fix-up our code.
2. Uses 'type annotations' to analyze our code:
   To analyze our code, we will add in type annotations which are like comments to describe the purpose of our code or the info that is flowing through our program.
3. Only active during development:
   Our browser and Node.js has no idea what TypeScript is. So all this extra syntax in our code never makes it into the browser or into Node.js. We'll compile our TypeScript to get JS out of that and its that JS is what we're going to actually execute.
4. Doesn't provide any performance optimisation:
   This is a strongly typeed language but don't do any optimisation.

Common Scenario of how we're going to write some code and run it inside the browser or with Node.js:
TypeScript code is JS with type annotations added in. Then we'll feed our code to the TS Compiler which is a command line tool that's going to read our code, cehck it for errors, and then convert it to plain JS. Then take this JS code and feed it into browser or into Node.js and then execute it. Therefore, we DON'T execute TS, we always exectue JS as the code we end-p writing is JS.

A practical example:
-> typescriptlang.org/play
-> a TS to JS converter: a in-browser TS compiler.
-> on the left is the TS code. On the right it will print out the equivalent JS.

Summary:
Writing TS is the same as writing JS with some extra documentation.
TS has no effect on how our code gets executed by the browser or Node - don't do any optimisation.
Think of TS as a friend sitting behind us while we are coding helping us catch errors during development.

320: Environment Setup:

TS Compiler:
Install x2 moduels as below:
npm install -g typesript ts-node
This is a one time setup
If on MacOS and get 'EACCESS' error, add 'sudo' to the front.

Run the compiler using this cmd: tsc --
This is what we'll use to compile our TS into JS.

Setup VSCode:
Settings to set:

1. add 'code' to path:
   allows mView -> Command Palette -> type: install path -> click: install 'code' command in PATH.
2. I already have Prettier installed -> code formatter.
3. Configure Prettier to us single quotes rather than double quotes.
4. Use double space rather than tab for indentation: Settings -> Tab Size: 2.

321: A First App:
To show why we use TS in general, build a little app:
Make a network request to fetch some JSON and print the result:
A little app that's just going to make a network request to some outside API. Fetch some data. Then print that data inside of our terminal.

Will accidently introduce couple of bugs into our app and we'll see TS has ability to help us catch those bugs whilst we are writing our code not when we execute our code. So just to show the typical workflow of TS.

The Flow to Build this App:

1. Take a look at the API we'll use to fetch data.
2. Create a new project directory.
3. Create a package.json file.
4. Install axios to make a request (to make a network request).
5. Write code.

API:
A fake JSON API that serves up fake data that we can use for testing/learning purpose: jsonplaceholder.typicode.com
Scroll down to Resources -> these are different types of records, so we can make a request or attempt to fetch from. We'll attempt to fetch the list of '/todos'.
Click on that link -> copy the url as we'll make network req to this address -> we'll get back a list of to do's items but we just need to fetch the first item from that list so we can modify the url slightly: at end of url, add '/1' which will give us a single to do on our screen which is the data we want to fetch and print out some info to our terminal

Create new project dir:
cmd: mkdir fetch-json
cmd: cd fetch-json
generate new package.json file: npm init -y
install axios moduel: npm install axios
-> node_modules
-> this folder has installed which is what I expected.
Now, I have everything setup. Next up, write the code.

322: Executing TypeScript Code:
We always write TS code inside of '.ts' files.
Now we write TS code to implement our program.
Our goal is to make a network request to fetch some JSON and print the result.

-> index.ts
To understand why TS code is handy.

1. import that axio module that we've installed.
2. past the dummy data -> one item from list. create a variable named url and assign it the url address. We are using axios to make an network request to that url.
3. Print out the JSON data we get back which should be the x1 To Do item.
4. Run the entire code.
   We can't run TS code directly inside of browser or with node.js. We have to compile this into plain JS, then we can execute the resulting JS code.
   To compile our code we need to access the compiler using this cmd: tsc
   then the name of the file we want to compile: index.ts
   Now, we have the complied version which is: index.js
   To run this we use the node command line tool: node index.js
   Now, the To Do item is printed out in terminal: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

To combine these two cmd to one:

1. tsc index.ts
2. node index.js
   The: ts-node index.ts will do that. So in one step we compiled and executed the resulting JS: the output is the same as above.

So that's how we put together a basic type of program and then execute it at the terminal
