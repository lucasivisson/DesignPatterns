import { Graphic } from "./graphic.interface";

export class CompoundGraphic implements Graphic {
  public id: number;
  private children: Graphic[] = [];

  public add(child: Graphic) {
    this.children.push(child);
  }

  public remove(child: Graphic) {
    this.children.filter((childFilter) => childFilter.id !== child.id);
  }

  public move(x: number, y: number) {
    for (let child of this.children) {
      child.move(x, y);
    }
  }

  public draw() {
    for (let child of this.children) {
      child.draw();
    }
  }
}
