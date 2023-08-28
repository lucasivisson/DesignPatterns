import { RoundPeg } from "./RoundPeg";
import { SquarePeg } from "./SquarePeg";

export class SquarePegAdapter extends RoundPeg {
  constructor(private peg: SquarePeg) {
    super(0);
    this.radius = this.getRadius();
  }

  public getRadius() {
    return (this.peg.width * Math.sqrt(2)) / 2;
  }
}
