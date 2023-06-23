import { FlyingTransport } from "./flyingTransport";

export class Helicopter implements FlyingTransport {
  // public origin: string;
  // public destination: string;
  // public passengers: string;

  fly(origin: string, destination: string, passengers: number) {
    console.log(
      `O Helicoptero com ${passengers} com origem em ${origin} e destino para ${destination} está subindo voo.`
    );
  }
}
