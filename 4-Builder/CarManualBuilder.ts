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

  setSeats(): void {
    // Documenta as funcionalidades do assento do carro.
  }

  setEngine(): void {
    // Adiciona instruções do motor.
  }

  setTripComputer(): void {
    // Adiciona instruções do computador de bordo.
  }

  setGPS(): void {
    // Adiciona instruções do GPS.
  }

  getProduct(): Manual {
    // Retorna o manual e reseta o builder.
    const product = this.manual;
    this.reset();
    return product;
  }
}
