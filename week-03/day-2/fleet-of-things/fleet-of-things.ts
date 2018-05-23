import {Thing} from "./thing";
import {Fleet} from "./fleet";

let fleet = new Fleet();

// creating and adding things
let task1 = new Thing ('Get milk');

let task2 = new Thing ('Remove the obstacles');

let task3 = new Thing ('Stand up');
task3.complete();

let task4 = new Thing ('Eat lunch');
task4.complete();

fleet.add(task1);
fleet.add(task2);
fleet.add(task3);
fleet.add(task4);

fleet.print();
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */