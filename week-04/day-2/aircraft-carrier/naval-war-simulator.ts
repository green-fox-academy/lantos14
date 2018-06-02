'use strict';

import { Aircraft, F16, F35 } from './aircraft'
import { AircraftCarrier } from './aircraft-carrier'

let bismarck: AircraftCarrier = new AircraftCarrier('Bismarck', 105, 10000);
let magellan: AircraftCarrier = new AircraftCarrier('Magellan', 80, 4500);

//carrier-01 preparing to fight
bismarck.add(new F16);
bismarck.add(new F35);


//carrier-02 preparing to fight
magellan.add(new F35);
magellan.add(new F35);


//fight
let roundCount: number = 1;

function navalWar(carrier1: AircraftCarrier, carrier2: AircraftCarrier) {
  carrier1.fill();
  carrier2.fill();
  console.log(`Ship ${carrier1.name}\n ${carrier1.getStatus()}`);
  console.log(`Ship ${carrier2.name}\n ${carrier2.getStatus()}`);
  console.log(`************ROUND ${roundCount}************`);
  carrier1.fight(carrier2);
  console.log(`--------${carrier1.name} ATTACKS-----------`);
  console.log(`Ship ${carrier1.name}\n ${carrier1.getStatus()}`);
  console.log(`Ship ${carrier2.name}\n ${carrier2.getStatus()}`);
  console.log('-------------------');
  if (carrier2.health <= 0) {
    console.log(`${carrier2.name} sunk to the bottom of the sea`)
    return;
  }
  carrier2.fight(carrier1);
  console.log(`--------${carrier2.name} ATTACKS-----------`);
  console.log(`Ship ${carrier1.name}\n ${carrier1.getStatus()}`);
  console.log(`Ship ${carrier2.name}\n ${carrier2.getStatus()}`);
  console.log('-------------------');
  if (carrier1.health <= 0) {
    console.log(`${carrier1.name} sunk to the bottom of the sea`)
    return;
  }
  if (carrier1.carrierAmmoStore <= 0 && carrier2.carrierAmmoStore <= 0) {
    console.log('Both ships ammo store is dry. The naval battle ends with a tie')
    return;
  }
  roundCount += 1;
  navalWar(carrier1, carrier2);
}

navalWar(bismarck, magellan);