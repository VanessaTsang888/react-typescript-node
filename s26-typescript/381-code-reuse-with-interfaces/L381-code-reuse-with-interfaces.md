# 381. Code Reuse with interfaces

Define another object under `oldCivic` object.

The `oldCivic` object and the `drink` object: they represent very different things inside of our app but both have have `summary` func that returns a String. This means they both are considered to be reportable types as they both have property called `summary`, that is a fnc that returns a String. Since both `oldCivic` and `drink` are reportable types, we can use both with this func. Now we can call the `printSummary` with `drink` object passed in to it. Work very well with both these very different objects.

## The conclusion

We can reuse a single interface in our case the `Reportable` interface to describe the shape or the different properties of very different objects. When we do so, we can have those objects implement different properties or different functions, and by doing so, we can make these very different objects interact with different func's that. This allows us to write generic func's such as the `printSummary` func. This feature interfaces encourage us to write more resuable code with TS. This is how we are going to use interfaces in general.
