import { Animal } from './animals';

export class Dog extends Animal {
  race: string;
  constructor(id: number, name: string, species: string, race: string) {
    super(id, name, species);
    this.race = race;
  }
}
