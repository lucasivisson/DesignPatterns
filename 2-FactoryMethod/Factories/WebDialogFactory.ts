import { Button } from "../Button/button.interface";
import { DialogFactory } from "./DialogFactory";
import { HTMLButton } from "../Button/HTMLButton";

export class WebDialogFactory extends DialogFactory {
  createButton(): Button {
    return new HTMLButton();
  }
}
