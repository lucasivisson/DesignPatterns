import { CostumerProtocol } from "./costumerProtocol.interface";

export class IndividualCostumer implements CostumerProtocol {
  constructor(public name: string) {}
}
