import { WinButton } from "../Button/WinButton";
import { Button } from "../Button/button.interface";
import { WinCheckbox } from "../Checkbox/WinCheckbox";
import { Checkbox } from "../Checkbox/checkbox.interface";
import { GuiFactory } from "./guifactory.interface";

export class WinFactory implements GuiFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}
