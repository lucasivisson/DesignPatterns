import { DialogFactory } from "./Factories/DialogFactory";
import { WebDialogFactory } from "./Factories/WebDialogFactory";
import { WindowsDialogFactory } from "./Factories/WindowsDialogFactory";

export class Application {
  dialogFactory: DialogFactory;

  constructor() {}

  initialize(OStype: string) {
    if (OStype === "Windows") {
      this.dialogFactory = new WindowsDialogFactory();
    } else if (OStype === "Web") {
      this.dialogFactory = new WebDialogFactory();
    } else {
      throw new Error("Error! Unknown operating system.");
    }
  }

  main(OStype: string) {
    this.initialize(OStype);
    this.dialogFactory.render();
  }
}
