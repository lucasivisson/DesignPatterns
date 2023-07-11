import { CostumerProtocol } from "./costumerProtocol.interface";

export class EnterpriseCostumer implements CostumerProtocol {
  constructor(public name: string) {}
}
