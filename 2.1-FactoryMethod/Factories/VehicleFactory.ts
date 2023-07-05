import { Car } from "../Vehicle/Car";
import { Vehicle } from "../Vehicle/vehicle.interface";

export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;

  // This method is an example, it's very importante this class to have anothers functions to this abstract class make sense on this architecture factory method
  pickUp(costumerName: string, vehicleName: string): Vehicle {
    const vehicle = this.getVehicle(vehicleName);
    vehicle.pickUp(costumerName);
    return vehicle;
  }
}
