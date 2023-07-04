import { Button } from "./Button.interface";

export class WindowsButton implements Button {
  render() {
    console.log("O botão WindowsButton foi renderizado");
  }
  onClick() {
    console.log("A função onClick foi preenchida no WindowsButton");
  }
}
