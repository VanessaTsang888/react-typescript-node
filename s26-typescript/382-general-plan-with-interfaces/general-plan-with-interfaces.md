# 382. General Plan with Interfaces

Different diagrams to understand the goal of Interfaces.

## The Gatekeeper
![Interfaces diagram 01](./dia-01-Interfaces.PNG)

Reportable interface is a gatekeeper to the `printSummary` func. 
This mechanic of using an `Interface` for gatekeeping is our strategy for building our in this course.

## Strategy for reusable code in TS
![Interfaces - The Strategy](./dia-02-Interfaces-strategy.PNG)

1. Create functions that accept arguments that are typed with interfaces.
2. Objects/classes can decide to "implement" a given interface to work with a func.

So the general strategy that we're going to use for code resue in TS is to create fun's that accept agruments that are typed with interfaces. Therefore, the func's we going to write are going to accept interfaces as much as possbile.

Then in order to call those func's, we're going to make sure that we have objects or classes that can decide to implement that interface.

```js
// Implement the interface passed into the `printSummary` func.
printSummary(oldCivic);
printSummary(drink);
```
Other values inside of our app can opt into implementing that interface towork with `printSummary` func. so the interface is acting as the gatekeeper.

We going to have different interfaces to restrict access to different func's. So the real code reuse is making the "some function" really resuable. 

Interface: Reportable
Some func: `printSummary`
Values: `oldCivic`, `drink`


