import { Circle } from "./Circle";
import { CompoundGraphic } from "./CompoundGraphic";
import { Dot } from "./Dot";
import { Graphic } from "./graphic.interface";

export class ImageEditor {
  public all: CompoundGraphic;

  public load() {
    this.all = new CompoundGraphic();
    this.all.add(new Dot(1, 1, 2));
    this.all.add(new Circle(2, 1, 2, 3));
  }

  public groupSelected(components: Graphic[]) {
    const group = new CompoundGraphic();
    for (let component of components) {
      console.log("a", component);
      group.add(component);
      this.all.remove(component);
    }
    this.all.add(group);
    this.all.draw();
  }
}
