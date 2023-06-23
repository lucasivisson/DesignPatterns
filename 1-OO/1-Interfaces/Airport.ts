import { FlyingTransport } from "./flyingTransport";

export class Airport {
  accept(vehicle: FlyingTransport): void {
    console.log(vehicle);
  }
}
