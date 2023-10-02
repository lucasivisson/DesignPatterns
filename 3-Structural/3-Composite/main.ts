import { Circle } from "./Circle";
import { Dot } from "./Dot";
import { ImageEditor } from "./ImageEditor";
import { Graphic } from "./graphic.interface";

const components: Graphic[] = [new Dot(3, 2, 1), new Circle(4, 2, 3, 4)];
const imgEdt = new ImageEditor();
imgEdt.load();
imgEdt.groupSelected(components);
