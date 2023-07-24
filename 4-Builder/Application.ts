import { CarBuilder } from "./CarBuilder";
import { CarManualBuilder } from "./CarManualBuilder";
import { Director } from "./Director";

export class Application {
  makeCar() {
    const director = new Director();

    const builder = new CarBuilder();
    director.constructSportsCar(builder);
    const car = builder.getProduct();

    const manualBuilder = new CarManualBuilder();
    director.constructSportsCar(manualBuilder);
    const manual = manualBuilder.getProduct();
  }
}
