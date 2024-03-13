export abstract class Animal {
  id: number;
  name: string;
  species: string;
  isAdopted = false;

  constructor(id: number, name: string, species: string) {
    this.id = id;
    this.name = name;
    this.species = species;
  }
}
