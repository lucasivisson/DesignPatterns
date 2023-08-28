import { RemoteControl } from "./RemoteControl";

export class AdvancedRemoteControl extends RemoteControl {
  public mute() {
    this.device.setVolumn(0);
  }
}
