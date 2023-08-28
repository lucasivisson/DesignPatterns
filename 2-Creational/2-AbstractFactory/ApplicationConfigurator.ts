import { Application } from "./Application";
import { MacFactory } from "./Factories/MacFactory";
import { WinFactory } from "./Factories/WinFactory";
import { GuiFactory } from "./Factories/guifactory.interface";

export class ApplicationConfigurator {
  private factory: GuiFactory;
  private app: Application;

  main(OStype: string) {
    if (OStype === "Windows") {
      this.factory = new WinFactory();
    } else if (OStype === "Mac") {
      this.factory = new MacFactory();
    } else {
      throw new Error("Error! Unknown operating system.");
    }

    this.app = new Application(this.factory);
  }

  render() {
    this.app.createUI();
    this.app.paint();
  }
}
