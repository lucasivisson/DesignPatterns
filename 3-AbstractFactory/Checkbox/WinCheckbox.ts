import { Checkbox } from "./checkbox.interface";

export class WinCheckbox implements Checkbox {
  paint() {
    console.log("Foi renderizado uma caixa de seleção do Windows");
  }
}
