import { MacButton } from "../Button/MacButton";
import { Button } from "../Button/button.interface";
import { MacCheckbox } from "../Checkbox/MacCheckbox";
import { Checkbox } from "../Checkbox/checkbox.interface";
import { GuiFactory } from "./guifactory.interface";

export class MacFactory implements GuiFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
