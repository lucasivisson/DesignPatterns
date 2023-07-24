import { AbstractMeal } from "./AbstractMeal";

export class Rice extends AbstractMeal {}
export class Beans extends AbstractMeal {}
export class Meat extends AbstractMeal {}
export class Beverage extends AbstractMeal {}
export class Dessert extends AbstractMeal {}

const rice = new Rice("Arroz", 50);
console.log(rice);
