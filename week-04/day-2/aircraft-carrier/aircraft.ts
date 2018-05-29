'use strict';

// aircraft class

export class Aircraft {
  type: string;
  maxAmmo: number;
  ammo: number;
  baseDmg: number;

  constructor() {
    this.ammo = 0;
  }

  fight(): number {
    let totalDamage: number = this.ammo * this.baseDmg;
    this.ammo = 0
    return totalDamage;
  }

  refill(amount: number): number {
    let ammoStorageLeft: number = this.maxAmmo - this.ammo;
    if (amount <= ammoStorageLeft)  {
      this.ammo += amount; 
      return 0;
    } else {
      this.ammo = this.maxAmmo;
      return amount - ammoStorageLeft;
    }
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    let status: string = `Type: ${this.type}, ammo: ${this.ammo}, Base Damage: ${this.baseDmg}, Total Damage: ${this.baseDmg * this.ammo}`
    return status;
  }

  isPriority() {
    if (this.type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}

// aircraft type classes

export class F16 extends Aircraft {
  type: string = 'F16';

  constructor() {
    super()
    this.maxAmmo = 8;
    this.baseDmg = 30;
  }
}

export class F35 extends Aircraft {
  type: string = 'F35';

  constructor() {
    super()
    this.maxAmmo = 12;
    this.baseDmg = 50;
  }
}

// testing
