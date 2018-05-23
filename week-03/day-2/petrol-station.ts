class Station {
  gasAmount: number;

  refill(car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }

}

class Car {
  gasAmount: number;
  capacity: number;

  constructor () {
    this.gasAmount = 0;
    this.capacity = 100;
  }
}

// testing zone

let molStation = new Station
molStation.gasAmount = 2800;

let ferrari = new Car;

console.log (molStation);
console.log (ferrari);

molStation.refill(ferrari);

console.log (molStation);
console.log (ferrari);