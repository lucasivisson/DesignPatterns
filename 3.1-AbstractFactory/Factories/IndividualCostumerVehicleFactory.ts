import { IndividualCostumer } from "../Costumer/IndividualCostumer";
import { Costumer } from "../Costumer/costumer.interface";
import { IndividualCar } from "../Vehicle/IndividualCar";
import { Vehicle } from "../Vehicle/vehicle.interface";
import { CreateVehicleCostumerFactory } from "./costumerVehicleFactory.interface";

export class IndividualCreateVehicleCostumerFactory
  implements CreateVehicleCostumerFactory
{
  createCostumer(costumerName: string): Costumer {
    return new IndividualCostumer(costumerName);
  }
  createVehicle(vehicleName: string, costumerName: string): Vehicle {
    const costumer = this.createCostumer(costumerName);
    return new IndividualCar(vehicleName, costumer);
  }
}
