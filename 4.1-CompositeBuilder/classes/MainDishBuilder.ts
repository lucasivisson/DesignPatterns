import { MealBuilderProtocol } from "../interfaces/mealBuilder.protocol";
import { MealBox } from "./MealBox";
import { Beans, Beverage, Dessert, Meat, Rice } from "./Meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _mealBox: MealBox = new MealBox();

  constructor() {
    this.reset();
  }

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 50);
    const beans = new Beans("Feijao", 10);
    const meat = new Meat("Carne", 20);
    this._mealBox.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Bebida", 7);
    this._mealBox.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Bebida", 10);
    this._mealBox.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
