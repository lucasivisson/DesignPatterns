import { Manual } from "./Manual";
import { Builder } from "./builder.interface";

export class CarManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.manual = new Manual();
  }

  setSeats(numberOfSeats: number): void {
    console.log(`Seta ${numberOfSeats} como a quantidade de assentos no carro`);
  }

  setEngine(engine: string): void {
    console.log(`Seta ${engine} como a engenharia do carro`);
  }

  setTripComputer(tripComputer: boolean): void {
    console.log(
      `Seta ${tripComputer} para as instruções do computador de bordo`
    );
  }

  setGPS(gps: boolean): void {
    console.log(`Seta ${gps} no gps do carro`);
  }

  getProduct(): Manual {
    console.log("Retorna o manual e reseta o builder");
    const product = this.manual;
    this.reset();
    return product;
  }
}
