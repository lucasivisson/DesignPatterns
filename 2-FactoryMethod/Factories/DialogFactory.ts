import { Button } from "../Button/button.interface";

export abstract class DialogFactory {
  abstract createButton(): Button;

  render() {
    const okButton: Button = this.createButton();
    okButton.onClick();
    okButton.render();
  }
}
