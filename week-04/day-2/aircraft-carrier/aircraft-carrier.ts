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

  fill() { // not including the priority method and has a problem when the carrier ammo storage runs out -- if I'll have time, I'll fix it
    this.aircrafts.forEach(aircraft => {
      if (this.carrierAmmoStore <= 0) {
        aircraft.ammo = 0;
        return 'out of Ammo';
      }
      let ammoNeedForAircraft: number = aircraft.maxAmmo - aircraft.ammo;
      aircraft.refill(aircraft.maxAmmo - aircraft.ammo);
      this.carrierAmmoStore -= ammoNeedForAircraft;
      
    })
  }

  fight(carrier: AircraftCarrier): void {
    let totalDestruction: number = 0;
    this.aircrafts.forEach(aircraft => {
      totalDestruction += (aircraft.ammo * aircraft.baseDmg)
    })
    carrier.health -= totalDestruction;
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

let bismarck: AircraftCarrier = new AircraftCarrier('Bismarck', 20, 150000);
let magellan: AircraftCarrier = new AircraftCarrier('Magellan', 30, 100000);

//carrier-01 preparing to fight
bismarck.add(new F16);
bismarck.add(new F35);
bismarck.fill();

//carrier-02 preparing to fight
magellan.add(new F35);
magellan.add(new F35);
magellan.fill();

//fight
let roundCount: number = 1;

function navalWar (carrier1: AircraftCarrier, carrier2: AircraftCarrier) {
  
  console.log('Ship BISMARCK\n' + carrier1.getStatus());
  console.log('Ship MAGELLAN\n' + carrier2.getStatus());
  console.log(`--------ROUND ${roundCount}-----------`);
  carrier1.fight(carrier2);
  console.log('--------BISMARCK ATTACKS-----------');
  console.log('Ship BISMARCK\n' + carrier1.getStatus());
  console.log('Ship MAGELLAN\n' + carrier2.getStatus());
  console.log('-------------------');
  if (carrier2.health < 0) {
    console.log(`${carrier2.name} sunk to the bottom of the sea`)
    return;
  }
  carrier2.fight(carrier1);
  console.log('--------MAGELLAN ATTACKS-----------');
  console.log('Ship BISMARCK\n' + carrier1.getStatus());
  console.log('Ship MAGELLAN\n' + carrier2.getStatus());
  console.log('-------------------');
  if (carrier1.health < 0) {
    console.log(`${carrier1.name} sunk to the bottom of the sea`)
    return;
  } 
  roundCount += 1;
  navalWar(carrier1,carrier2);
}

navalWar (bismarck, magellan);