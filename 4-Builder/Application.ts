import { CarBuilder } from "./CarBuilder";
import { CarManualBuilder } from "./CarManualBuilder";
import { Director } from "./Director";

export class Application {
  makeCar() {
    const director = new Director();

    const builder = new CarBuilder();
    director.constructSportsCar(builder);
    let car = builder.getProduct();
    console.log(car);

    director.constructSUV(builder);
    car = builder.getProduct();
    console.log(car);

    const manualBuilder = new CarManualBuilder();
    director.constructSportsCar(manualBuilder);
    const manual = manualBuilder.getProduct();
    console.log(manual);
  }
}

new Application().makeCar();
