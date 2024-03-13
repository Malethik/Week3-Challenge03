import { Component } from './component';
import {} from 'module';
interface Dog {
  id: number;
  name: string;
  species: string;
  race: string;
}

export class Card extends Component {
  dogs: Dog;
  petName: string;
  petSpecies: string;
  petRace: string;
  petId: number;

  constructor(selector: string, dogs: Dog) {
    super(selector);
    this.dogs = dogs;
    this.petId = this.dogs.id;
    this.petName = this.dogs.name;
    this.petSpecies = this.dogs.species;
    this.petRace = this.dogs.race;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
     <div class="card">
     <ul>
        <li>Name: ${this.petName}</li>
        <li>Species:${this.petSpecies}</li>
        <li>Race:${this.petRace}</li>
        <li>ID:${this.petId}</li>
     </ul>
     </div>
    `;
  }
}
