import { RoundHole } from "./RoundHole";
import { RoundPeg } from "./RoundPeg";
import { SquarePeg } from "./SquarePeg";
import { SquarePegAdapter } from "./SquarePegAdapter";

const hole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(
  "esfera com largura de 5cm cabe no buraco redondo de 5cm?",
  hole.fits(roundPeg)
);

const smallSquare = new SquarePeg(5);
const largeSquare = new SquarePeg(10);
// hole.fits(smallSquare); Isso não vai compilar, tipos são incompativeis

const smallSquareAdapter = new SquarePegAdapter(smallSquare);
const largeSquareAdapter = new SquarePegAdapter(largeSquare);
console.log(
  "Quadrado com largura de 5cm cabe no buraco redondo de 5cm?",
  hole.fits(smallSquareAdapter)
);
console.log(
  "Quadrado com largura de 10cm cabe no buraco redondo de 5cm?",
  hole.fits(largeSquareAdapter)
);
