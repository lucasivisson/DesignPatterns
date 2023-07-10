import { Button } from "./button.interface";

export class MacButton implements Button {
  paint() {
    console.log("Foi renderizado um botão do Mac ");
  }
}
