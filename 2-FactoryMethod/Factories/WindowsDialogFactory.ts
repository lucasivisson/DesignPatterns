import { Button } from "../Button/button.interface";
import { DialogFactory } from "./DialogFactory";
import { WindowsButton } from "../Button/WindowsButton";

export class WindowsDialogFactory extends DialogFactory {
  createButton(): Button {
    return new WindowsButton();
  }
}
