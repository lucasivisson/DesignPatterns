import { Button } from "./button.interface";

export class WinButton implements Button {
  paint() {
    console.log("Foi renderizado um botão do windows");
  }
}
