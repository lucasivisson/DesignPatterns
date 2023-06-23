import { Animal } from "./Animal";
import { Cat } from "./Cat";
import { Dog } from "./Dog";

const dog = new Dog();
const cat = new Cat();
const animalArray = [dog, cat];

animalArray.forEach((animal: Animal) => {
  animal.makeSound();
});
