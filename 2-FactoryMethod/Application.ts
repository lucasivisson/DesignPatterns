import { Dialog } from "./Dialog";
import { WebDialogFactory } from "./WebDialogFactory";
import { WindowsDialogFactory } from "./WindowsDialogFactory";

export class Application {
  dialog: Dialog;

  constructor() {}

  initialize(OStype: string) {
    if (OStype === "Windows") {
      this.dialog = new WindowsDialogFactory();
    } else if (OStype === "Web") {
      this.dialog = new WebDialogFactory();
    } else {
      throw new Error("Error! Unknown operating system.");
    }
  }

  main(OStype: string) {
    this.initialize(OStype);
    this.dialog.render();
  }
}
