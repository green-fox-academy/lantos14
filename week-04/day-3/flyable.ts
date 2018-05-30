'use strict';

export interface Flyable {
  land(): void,
  fly(): void,
}

abstract class Vehicle {
  speed: number;
  color: string;
  id: number;
}

class Helicopter extends Vehicle implements Flyable {

  land() { };
  fly() { };
}
