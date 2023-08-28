import { Button } from "./button.interface";

export class HTMLButton implements Button {
  render() {
    console.log("O botão HTMLButton foi renderizado");
  }
  onClick() {
    console.log("A função onClick foi preenchida no HTMLButton");
  }
}
