import { CarBuilder } from "./Builder/Car/CarBuilder";
import { ManualCarBuilder } from "./Builder/ManualCar/CarManualBuilder";
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

    const manualBuilder = new ManualCarBuilder();
    director.constructSportsCar(manualBuilder);
    const manual = manualBuilder.getProduct();
    console.log(manual);
  }
}

new Application().makeCar();
