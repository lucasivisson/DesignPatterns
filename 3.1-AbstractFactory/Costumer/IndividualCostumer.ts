import { Costumer } from "./costumer.interface";

export class IndividualCostumer implements Costumer {
  constructor(public name: string) {
    this.name += " (CLIENTE INDIVIDUAL)";
  }
}
