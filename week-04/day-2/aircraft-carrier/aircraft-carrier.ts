'use strict'

import { Aircraft, F16, F35 } from './aircraft'

class AircraftCarrier {
  name: string;
  aircrafts: Aircraft[] = [];
  carrierAmmoStore: number;
  health: number;

  constructor(name, carrierAmmoStore, health) {
    this.name = name;
    this.carrierAmmoStore = carrierAmmoStore;
    this.health = health;
  }

  add(aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() { // at the last fill, before carrier ammo store runs out, function not works properly
    this.aircrafts.forEach(aircraft => {
      if (this.carrierAmmoStore <= 0) {
        aircraft.ammo = 0;
        return 'out of Ammo';
      }
      let ammoNeedForAircraft: number = aircraft.maxAmmo - aircraft.ammo;
      if (ammoNeedForAircraft > this.carrierAmmoStore) {
        aircraft.refill(this.carrierAmmoStore);
        this.carrierAmmoStore = 0;
      }
      aircraft.refill(aircraft.maxAmmo - aircraft.ammo);
      this.carrierAmmoStore -= ammoNeedForAircraft;

    })
  }

  fight(carrier: AircraftCarrier): void {
    let totalDestruction: number = 0;
    if (this.carrierAmmoStore <= 0 && this.aircrafts[0].ammo === 0) { } else {
      this.aircrafts.forEach(aircraft => {
        totalDestruction += (aircraft.ammo * aircraft.baseDmg)
        aircraft.ammo = 0;
      })
      carrier.health -= totalDestruction;
    }
  }

  getStatus(): string {
    //aircraft list
    let aircraftStatusList = '';
    this.aircrafts.forEach(aircraft => {
      aircraftStatusList += `${aircraft.getStatus()}\n`;
    })
    //carrier stats
    let totalDamage: number = 0;
    this.aircrafts.forEach(aircraft => {
      totalDamage += aircraft.ammo * aircraft.baseDmg;
    })
    let status: string = `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.carrierAmmoStore}, Total Damage: ${totalDamage}\nAircrafts:\n${aircraftStatusList}`
    return status;
  }
}

let bismarck: AircraftCarrier = new AircraftCarrier('Bismarck', 105, 10000);
let magellan: AircraftCarrier = new AircraftCarrier('Magellan', 100, 4000);

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