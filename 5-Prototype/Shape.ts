// export type ShapeDefault = {
//   x: number;
//   y: number;
//   color: string;
// };

export abstract class Shape {
  private _x: number;
  private _y: number;
  private _color: string;

  constructor(source?: Shape) {
    if (source) {
      this._x = source.x;
      this._y = source.y;
      this._color = source.color;
    }
  }

  public get x(): number {
    return this._x;
  }

  public set x(x: number) {
    this._x = x;
  }

  public get y(): number {
    return this._y;
  }

  public set y(y: number) {
    this._y = y;
  }

  public get color(): string {
    return this._color;
  }

  public set color(color: string) {
    this._color = color;
  }

  abstract clone(): Shape;
}
