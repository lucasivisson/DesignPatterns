import { Button } from "../Button/button.interface";
import { Checkbox } from "../Checkbox/checkbox.interface";

export interface GuiFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
