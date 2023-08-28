import { Shape } from "./Shape";

export class Circle extends Shape {
  private _radius: number;

  constructor(source: Circle) {
    super(source);
    this._radius = source.radius;
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(radius: number) {
    this._radius = radius;
  }

  clone(): Shape {
    return new Circle(this);
  }
}
