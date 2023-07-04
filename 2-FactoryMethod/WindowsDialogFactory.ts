import { Button } from "./Button.interface";
import { Dialog } from "./Dialog";
import { WindowsButton } from "./WindowsButton";

export class WindowsDialogFactory extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}
