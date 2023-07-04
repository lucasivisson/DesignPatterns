import { Vehicle } from "./vehicle.interface";

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(costumerName: string): void {
    console.log(`${this.name} está buscando o  ${costumerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou`);
  }
}
