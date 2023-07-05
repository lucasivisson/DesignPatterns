import { randomVehicleAlgorithm } from "./main/randomVehicleAlgorithm";
import { randomNumbers } from "./utils/randomNumbers";

const costumerNames = ["Ana", "Joana", "Helena", "João"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = costumerNames[randomNumbers(costumerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log("---");
}
