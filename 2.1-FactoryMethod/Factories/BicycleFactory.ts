import { Bicycle } from "../Vehicle/Bicycle";
import { Vehicle } from "../Vehicle/vehicle.interface";
import { VehicleFactory } from "./VehicleFactory";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
