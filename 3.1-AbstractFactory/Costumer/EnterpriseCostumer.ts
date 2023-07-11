import { Costumer } from "./costumer.interface";

export class EnterpriseCostumer implements Costumer {
  constructor(public name: string) {
    this.name += " (CLIENTE EMPRESARIAL)";
  }
}
