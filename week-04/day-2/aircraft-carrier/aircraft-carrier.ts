'use strict'

import { Aircraft, F16, F35 } from './aircraft'

export class AircraftCarrier {
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
        console.log(`${this.name} is out of Ammo, reloding ${aircraft.type} is not possible`)
        return 'out of Ammo';
      } else if (aircraft.maxAmmo > this.carrierAmmoStore) {
        aircraft.refill(this.carrierAmmoStore);
        this.carrierAmmoStore = 0;
      } else {
        aircraft.refill(aircraft.maxAmmo);
        this.carrierAmmoStore -= aircraft.maxAmmo;
      }
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