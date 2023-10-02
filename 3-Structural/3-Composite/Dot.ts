import { Graphic } from "./graphic.interface";

export class Dot implements Graphic {
  constructor(public id: number, protected x: number, protected y: number) {}

  public move(x: number, y: number) {
    this.x += x;
    this.y += y;
  }

  public draw() {
    console.log(`Desenha um ponto em x: ${this.x} e y: ${this.y}`);
  }
}
