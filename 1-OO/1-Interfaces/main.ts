import { Airplane } from "./Airplane";
import { Airport } from "./Airport";
import { DomesticatedGryphon } from "./DomesticatedGryphon";
import { Helicopter } from "./Helicopter";

const airport = new Airport();
const airplane = new Airplane();
const helicopter = new Helicopter();
const domesticatedGryphon = new DomesticatedGryphon();

airplane.fly("Fortaleza", "São Paulo", 50);
helicopter.fly("São Paulo", "Mina Gerais", 50);
domesticatedGryphon.fly("Curitiba", "Rio de Janeiro", 50);
airport.accept(airplane);
airport.accept(helicopter);
airport.accept(domesticatedGryphon);
