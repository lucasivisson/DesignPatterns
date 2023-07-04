import { Dialog } from "./Dialog";
import { WebDialog } from "./WebDialog";
import { WindowsDialog } from "./WindowsDialog";

export class Application {
  dialog: Dialog;

  constructor() {}

  initialize(OStype: string) {
    if (OStype === "Windows") {
      this.dialog = new WindowsDialog();
    } else if (OStype === "Web") {
      this.dialog = new WebDialog();
    } else {
      throw new Error("Error! Unknown operating system.");
    }
  }

  main(OStype: string) {
    this.initialize(OStype);
    this.dialog.render();
  }
}
