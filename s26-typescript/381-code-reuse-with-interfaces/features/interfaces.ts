interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

/* 
Define another object for drinks. Give it a colour, is it carbonated?, 
suguar, and a summary text with dynamtic data:
This is type of reportable as it has a property called `summary` that is 
a func that returns a String.
*/
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// Since both `oldCivic` and `drink` are reportable types, we can use both with this func.
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Work very well with both these very different objects.
printSummary(oldCivic);
printSummary(drink);
