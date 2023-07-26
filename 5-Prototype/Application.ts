import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

class Application {
  private _shapes: Shape[] = [];

  constructor() {
    const circle = new Circle({} as Circle);
    circle.x = 10;
    circle.y = 10;
    circle.radius = 20;
    this._shapes.push(circle);

    const anotherCircle = circle.clone();
    this._shapes.push(anotherCircle);

    const rectangle = new Rectangle({} as Rectangle);
    rectangle.width = 10;
    rectangle.height = 20;
    this._shapes.push(rectangle);
  }

  businessLogic() {
    const shapesCopy: Shape[] = [];

    this._shapes.forEach((shape) => {
      shapesCopy.push(shape.clone());
    });

    console.log(this._shapes);
    console.log(shapesCopy);
  }
}

new Application().businessLogic();
