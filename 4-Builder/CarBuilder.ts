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

  setSeats(): void {}

  setEngine(): void {}

  setTripComputer(): void {}

  setGPS(): void {}

  getProduct(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}
