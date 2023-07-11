import { Costumer } from "../Costumer/costumer.interface";
import { Vehicle } from "../Vehicle/vehicle.interface";

export interface CreateVehicleCostumerFactory {
  createCostumer(costumerName: string): Costumer;
  createVehicle(vehicleName: string, costumerName: string): Vehicle;
}
