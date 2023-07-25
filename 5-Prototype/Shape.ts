export type ShapeDefault = {
  x: number;
  y: number;
  color: string;
};

export abstract class Shape {
  private _x: number;
  private _y: number;
  private _color: string;

  constructor(source: ShapeDefault | Shape) {
    if (typeof source === ShapeDefault) {
    }
    this._x = source.x;
    this._y = source.y;
    this._color = source.color;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get color(): string {
    return this._color;
  }

  abstract clone(): Shape;
}
