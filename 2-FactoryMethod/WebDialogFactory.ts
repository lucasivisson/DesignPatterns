import { Button } from "./Button.interface";
import { Dialog } from "./Dialog";
import { HTMLButton } from "./HTMLButton";

export class WebDialogFactory extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}
