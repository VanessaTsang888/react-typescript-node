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

323: One Quick Change:
Print report as multi-line String uing console.lgo()
Run the file using: ts-node index.ts
-> error msge: Cannot find name 'todo'.

324: Catching Erors with TypeScript:
The property id's we used are wrong. They should be:
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}

This is why we got the error msg. The lesson is that we write code with bug in it but we were not aware of it until we executed our program. This is what TS is made to prevent.
Add in some TS syntax / define interface is used to define the structure of an object. Each Todo object will have 3 properties.
TS: write the 3 different properties the response has, and type of data each properties reference:

interface Todo {
id: number;
title: string;
completed: boolean;
}

Now we can tell TS that this response.data is going to be one of those Todo's. So straight after that bit of code, we add: as Todo;
Now, TS will underline our errors to tell us we have bugs in our code using the type labeling we added to this program. As we fix the errors, the underline will disappear.
I've fixed all bugs and ran again using: ts-node index.ts
and the program printed out the report without any errors:

The Todo with ID: 1
Has a Title of: delectus aut autem
Is it finished? false

I've checked the JSON files, and I can see the report is correct.

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

326: Course Overview:
Course Goal:

1. Understand basic types in TS
2. Function typing & annotations
3. Type definition files
4. Arrays in TS
5. Modules systems
6. Classes & Refresh on OOP
7. Projects

1-6 = Syntax + Features
7 = Design Patterns

327: Types:
Syntax + Features 01: Baisc Types
Type -> a way to refer to the different properties + functions that a value has.

-> a value is anything that we can assign to a variable: strings, numbers, booleans, null, undefined, objects, fn's, classes etc. All of these have a Type.
An arry, an Object, a function all have a Type.

What different properties and methods a string has:
i.e. "red"
-> Its a string
-> It is a value that has all the properties + methods that we assume that a string has.

The properties and methods a string has in JS:
charAt()
CharCodeAt()
concat()
includes()
endsWith()
indexOf()
lastIndexOf()
localeCompare()
match()

In short, the type of a value of "red" is a String. Every value we create has a type assigned to it.

Previous app:
The response.data is a Todo object, that has 3 properties and each of them has a type.
So when we describe types in TS, these are just shortcuts or labels as we are describing the differnt properties and methods that a single value has.

328: More on Types:
Type: Values That Have This Type:
string 'hi there' "" 'Today is Monday'
number .000025 -20 40000000000000000
boolean true false
Date new Date()
Todo { id: 1, completed: true, title: "Trash" }

Every value in TS has a type, i.e. a Boolean type has a value of true and a value of false. If we made anew date object, the resulting object from that would have a type of Date.
This object has a type Todo:
Todo: { id: 1, completed: true, title: "Trash" }

We have 2 category of Types:
Primative Types and Object Types:

Primative Types
number, boolean, void, undefined.
string, symbol, null.

Object Types:
functions, arrays.
classes, objects.

We care about types as:

1. Types are used by TS Comiler to analyse our code for errors, i.e. the todo variable contains a couple of different types such as the number type for the id property etc.
2. Types allow other engineers to understand what values are flowing around our codebase, i.e. in our First App we used TS to state that the logTodo takes-in arg of title which has a type of string. This allows TS to find errors for us.

329: Examples of Types:

Basic features of TS:
create new dir -> mkdir features | cd features | code

330: Where Do We Use Types?
We use types everywhere!
Whether you want to or not, every value you define inside your app is going to have a type associated with it. TS is going to do its best to check the quality of our code or check for errors by using those types.

331: Type Annotations & Type Inference:
Two different systems inside TS. These 2 different features apply slightly differently to variable declarations, functions and objects.

1. Type Annotations & Type Inference as apply for variables.
   Type Annotations is a little code we add to tell TS what type of value a variable will refer to.
   Type Inference is TS is going to attampt to figure out what type of value a variable refers to. We are relying TS to figure out what types we are working with.

   332: Type Annotations with Variable:
   How Annotations work with variables:

   let nothingMuch: null = null;
   let nothing: undefined = undefined;

// built in Objects:
// Declare a variable and name it now that has a type of Date assign it of an instance of a Date object:
let now: Date = Deate();

333: Object Literal Annotations:
See the variables.ts file for my notes.

334 Annotation Around Functions:
See the variables.ts file for my notes.

335 Understanding Inference:
Know when we can rely on type Inference.

If variable declaration and variable initialisation are on the same line. TS will figure out the type of the variable for us.

Type Annotations: dev's tell tS the type.
When?

1. When we declare a variable on one line then initialise it later.
2. When we want a vaariable to have a type that can't be inferred.
3. When a fn returns the 'Any' type and we need to clarify the value.

Type Inference: when TS guesses the type.

1. Always or when possible.

336 The 'any' Type:
The 'any' type:
When to use annotations:

1. function that returns the 'any' type:

Define a JSON as a string, then pass that JSON. So write a variable named json, and assign it a JSON string.
Turn the string into an actual Object.

See the variables.ts file for my notes.

337 Fixing the 'any' Type:
See the variables.ts file for my notes.
