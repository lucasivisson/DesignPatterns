import { MealBuilderProtocol } from "../interfaces/mealBuilder.protocol";
import { MealBox } from "./MealBox";
import { Beans, Meat, Rice } from "./Meals";

export class VeganDishBuilder implements MealBuilderProtocol {
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
    this._mealBox.add(rice, beans);
    return this;
  }

  getMeal(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
