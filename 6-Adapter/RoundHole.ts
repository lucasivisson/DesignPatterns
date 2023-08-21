import { RoundPeg } from "./RoundPeg";

export class RoundHole {
  constructor(private _radius: number) {}

  public get radius(): number {
    return this._radius;
  }

  public fits(peg: RoundPeg) {
    return this.radius >= peg.radius;
  }
}
