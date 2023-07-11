import { VehicleProtocol } from "./vehicleProtocol.interface";
import { CostumerProtocol } from "../Costumer/costumerProtocol.interface";

export class EnterpriseCar implements VehicleProtocol {
  constructor(
    public name: string,
    private readonly costumer: CostumerProtocol
  ) {}

  pickUp(): void {
    console.log(`${this.name} está buscando ${this.costumer.name}`);
  }
}
