import { Button } from "./Button/button.interface";
import { Checkbox } from "./Checkbox/checkbox.interface";
import { GuiFactory } from "./Factories/guifactory.interface";

export class Application {
  private factory: GuiFactory;
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GuiFactory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint() {
    this.button.paint();
    this.checkbox.paint();
  }
}
