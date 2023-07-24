import { Builder } from "./Builder/builder.interface";

export class Director {
  constructSportsCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine("SportEngine");
    builder.setTripComputer(true);
    builder.setGPS(true);
  }

  constructSUV(builder: Builder) {
    builder.reset();
    builder.setSeats(4);
    builder.setEngine("SUVEngine");
    builder.setGPS(true);
  }
}
