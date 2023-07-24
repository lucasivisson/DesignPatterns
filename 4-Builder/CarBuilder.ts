import { Car } from "./Car";
import { Builder } from "./builder.interface";

export class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(numberOfSeats: number): void {
    this.car.numberOfSeats = numberOfSeats;
  }

  setEngine(engine: string): void {
    this.car.engine = engine;
  }

  setTripComputer(tripComputer: boolean): void {
    this.car.tripComputer = tripComputer;
  }

  setGPS(gps: boolean): void {
    this.car.gps = gps;
  }

  getProduct(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}
