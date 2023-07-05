import { BicycleFactory } from "../Factories/BicycleFactory";
import { CarFactory } from "../Factories/CarFactory";
import { Vehicle } from "../Vehicle/vehicle.interface";
import { randomNumbers } from "../utils/randomNumbers";

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta Preto");
  const bicycle = bicycleFactory.getVehicle("Caloi");
  const vehicles = [car1, car2, bicycle];
  return vehicles[randomNumbers(vehicles.length)];
}
