import { Shape } from "./Shape";

export class Rectangle extends Shape {
  private _width: number;
  private _height: number;

  constructor(source: Rectangle) {
    super(source);
    this._width = source._width;
    this._height = source._height;
  }

  public get width(): number {
    return this._width;
  }

  public set width(width: number) {
    this._width = width;
  }

  public get height(): number {
    return this._height;
  }

  public set height(height: number) {
    this._height = height;
  }

  clone(): Shape {
    return new Rectangle(this);
  }
}
