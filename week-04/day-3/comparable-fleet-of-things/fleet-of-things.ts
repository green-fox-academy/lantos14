import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

// creating and adding things
let task1 = new Thing('Get milk');

let task2 = new Thing('Remove the obstacles');

let task3 = new Thing('Stand up');
task3.complete();

let task4 = new Thing('Eat lunch');
task4.complete();

fleet.add(task1);
fleet.add(task2);
fleet.add(task3);
fleet.add(task4);

// the added compare function sort the output 1st by completion 2nd by alphabetical order
console.log(fleet.things.sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
}));

fleet.print();

for (let thing of fleet.things) {
  thing.printAllFields();
}