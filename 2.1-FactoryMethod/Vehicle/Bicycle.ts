import { Vehicle } from "./vehicle.interface";

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(costumerName: string): void {
    console.log(`A bicicleta ${this.name} está buscando o  ${costumerName}`);
  }
  stop(): void {
    console.log(`A bicicleta ${this.name} parou`);
  }
}
