'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

function securityCheck(queue) {
  // who has a gun, can't enter, but won't be checked for alcohol
  // who doesn't have gun, will be checked for alcohol, after that, it's allowed to enter
  let AllowedList: any [] = [];
  
  for (let i: number = 0; i < queue.length; i++) {
    if (queue[i].guns !== 0) { // gun handling
      watchlist.push (queue[i].name);
      queue[i].guns = 0;
    } else if (queue[i].alcohol !== 0) { // alcohol handling
      securityAlcoholLoot += queue[i].alcohol;
      queue[i].alcohol = 0;
      AllowedList.push (queue[i].name);
    } else {
      AllowedList.push (queue[i].name);
    }
  }
  console.log (`Watchlist:\n${watchlist}`);
  console.log ('-------------');
  console.log (`confiscated alcohol: ${securityAlcoholLoot}`);
  console.log ('-------------');
  console.log (`Allowed to go inside:\n${AllowedList}`);
  console.log ('-------------');
}

securityCheck(queue);

export = securityCheck;