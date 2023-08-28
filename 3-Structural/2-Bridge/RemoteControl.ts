import { Device } from "./Device";

export class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  public volumeDown() {
    this.device.setVolumn(
      this.device.getVolumn() - this.device.quantityOfNumberToSkip
    );
  }

  public volumeUp() {
    this.device.setVolumn(this.device.getVolumn() + 10);
  }

  public ChannelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  public ChannelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}
