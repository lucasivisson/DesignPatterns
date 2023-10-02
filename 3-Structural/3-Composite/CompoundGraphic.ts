import { Graphic } from "./graphic.interface";

export class CompoundGraphic implements Graphic {
  constructor(private children: Graphic[]) {}

  public add(child: Graphic) {
    this.children.push(child);
  }

  public remove(child: Graphic) {
    this.children.pop();
  }

  public move(x: number, y: number) {
    for (let child of this.children) {
      child.move(x, y);
    }
  }
  draw: () => void;
}
