import { Dot } from "./Dot";

export class Circle extends Dot {
  constructor(id: number, x: number, y: number, private radius: number) {
    super(id, x, y);
  }

  public draw(): void {
    console.log(
      `Desenha um circulo em x:${this.x} e y:${this.y} com raio: ${this.radius}`
    );
  }
}
