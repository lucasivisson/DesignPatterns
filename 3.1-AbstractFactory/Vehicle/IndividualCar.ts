import { Vehicle } from "./vehicle.interface";
import { Costumer } from "../Costumer/costumer.interface";

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly costumer: Costumer) {}

  pickUp(): void {
    console.log(
      `O ${this.name} (INDIVIDUAL) está buscando ${this.costumer.name}`
    );
  }
}
