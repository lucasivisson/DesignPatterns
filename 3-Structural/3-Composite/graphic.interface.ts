export interface Graphic {
  id: number;
  move: (x: number, y: number) => void;
  draw: () => void;
}
