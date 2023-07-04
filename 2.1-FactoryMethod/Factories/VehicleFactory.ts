import { Vehicle } from "../Vehicle/vehicle.interface";

export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;
}
