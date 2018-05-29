'use strict';

import {Garden} from './garden';

export class Plant {
  type: string;
  color: string;
  waterAmount: number = 0;

  constructor (type, color) {
    this.type = type;
    this.color = color;
  }
}