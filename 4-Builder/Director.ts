import { Builder } from "./builder.interface";

export class Director {
  constructSportsCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(new SportEngine());
    builder.setTripComputer(true);
    builder.setGPS(true);
  }

  constructSUV(builder: Builder) {
    // ...
  }
}
