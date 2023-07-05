import { Car } from "../Vehicle/Car";
import { Vehicle } from "../Vehicle/vehicle.interface";
import { VehicleFactory } from "./VehicleFactory";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
