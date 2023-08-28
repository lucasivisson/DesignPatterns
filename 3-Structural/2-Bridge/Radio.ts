import { Device } from "./Device";

export class Radio extends Device {
  constructor() {
    super();
    this.enabled = true;
    this.volumn = 10;
    this.channel = 1;
    this.quantityOfNumberToSkip = 0.2;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  getVolumn(): number {
    return this.volumn;
  }

  setVolumn(newVolumn: number): void {
    this.volumn = newVolumn;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(newChannel: number): void {
    this.channel = newChannel;
  }
}
