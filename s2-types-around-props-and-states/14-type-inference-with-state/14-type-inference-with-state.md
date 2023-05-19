# 14. Type Inference with State

When user click on the btn, we need to take the current name and add it to an Array piece of state. An array of strings that stores the entire list of guests - all different names we collected over time. This is why we now need to write a new piece of state and initialise with an empty array since we will need to store our guests whom we wish to invite to our party in here.

## button
Add on onClick prop and inside it define an inline func to invoke but to make life easier we'll define it just above the return method as here we can write all the logic we need to add a new guest.

## input element
Take whatever the user has typed inside of here and add that as a new String into our guests array. 
***onClick function***
Then within the onClick func, clear out the current value of the input/empty it entirly. So for this we use the setName piece of state or the setter func and pass-in empty string. 
Then take the current value of name, add it to our guests array, by calling setGuests func. Pass-in arry of name as this will delete any previous guests we've added into our app.

Take the current array of guests, take all the different strings out of it, add it to an new array, and then add it to a new array, and then add on name to the very end. Now we have error of `never[]` which is array of never. For the guests array we initialise with empty array but since its empty TS have no idea what types of value should be stored in here. This is why the guests piece of state is type of never[] as TS has no idea what type of values is going to go inside of this array. So annotate this useState hook: 

```js 
// Our guests piece of state (which is a variable) will be an array of Strings - see the type annotation on the right side: <string[]>
const [guests, setGuests] = useState<string[]>([]);
```

## Test in UI
`npm start` tested and found that the input and button displays as expected. Now, users can type inside of the input box and click the submit btn.

### The conclusion
It is fine to initialise a piece of state with empty string as Type Inference will know that the `name` is of type. But if we put in default value where Type Inference don't known then we need to provide a type for that piece of state so annote that state.