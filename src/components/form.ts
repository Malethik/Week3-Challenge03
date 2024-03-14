import { Component } from './component';
import { Dog } from '../model/dog';
import { pets } from '../data';

export class Form extends Component {
  name: string;
  species: string;
  race: string;
  constructor(selector: string) {
    super(selector);
    this.name = '';
    this.species = '';
    this.race = '';
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();

    const input = this.element.querySelector('button');
    if (input) {
      input.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.name = target.value as string;
        this.species = target.value as string;
        this.race = target.value as string;
        const id = Math.floor(Math.random() * 1000);
        const newDog = new Dog(id, this.name, this.species, this.race);

        pets.push(newDog);
      });
    }
  }

  createTemplate() {
    return `
    <form>
      <input type="text" class="name" placeholder="Name" />
       <input type="text" class="species" placeholder="Species" />
      <input type="text" class="race" placeholder="Race" />
      <button type="submit" class="form">ADD PET</button>
    </form>
    `;
  }
}
