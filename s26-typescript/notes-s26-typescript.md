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
