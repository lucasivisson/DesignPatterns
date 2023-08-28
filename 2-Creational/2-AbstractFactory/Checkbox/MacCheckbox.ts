import { Checkbox } from "./checkbox.interface";

export class MacCheckbox implements Checkbox {
  paint() {
    console.log("Foi renderizado uma caixa de seleção do Mac");
  }
}
