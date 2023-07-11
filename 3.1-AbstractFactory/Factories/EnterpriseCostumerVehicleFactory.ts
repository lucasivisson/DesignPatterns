import { EnterpriseCostumer } from "../Costumer/EnterpriseCostumer";
import { Costumer } from "../Costumer/costumer.interface";
import { EnterpriseCar } from "../Vehicle/EnterpriseCar";
import { Vehicle } from "../Vehicle/vehicle.interface";
import { CreateVehicleCostumerFactory } from "./costumerVehicleFactory.interface";

export class EnterpriseCreateVehicleCostumerFactory
  implements CreateVehicleCostumerFactory
{
  createCostumer(costumerName: string): Costumer {
    return new EnterpriseCostumer(costumerName);
  }
  createVehicle(vehicleName: string, costumerName: string): Vehicle {
    const costumer = this.createCostumer(costumerName);
    return new EnterpriseCar(vehicleName, costumer);
  }
}
