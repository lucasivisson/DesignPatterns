export class RoundPeg {
  constructor(private _radius: number) {}

  public get radius(): number {
    return this._radius;
  }

  public set radius(radius: number) {
    this._radius = radius;
  }
}
