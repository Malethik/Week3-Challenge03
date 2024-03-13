import { Component } from './component';
import { Dog } from '../model/dog';
import { pets } from '../data';

export class Form extends Component {
  name: string;
  especie: string;
  race: string;
  constructor(selector: string) {
    super(selector);
    this.name = '';
    this.especie = '';
    this.race = '';
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();

    const input = this.element.querySelector('button');
    if (input) {
      input.addEventListener('click', (event: Event) => {
        /* Const target = event.target as HTMLInputElement;
        this.name = target.value;
        this.especie = target.value;
        this.race = target.value;
        console.log(input); */

        const formData = new FormData(formElement);
        const name = formData.get('name') as string;
        const species = formData.get('species') as string;
        const race = formData.get('race') as string;
        const id = Math.floor(Math.random() * 1000);
        const newDog = new Dog(id, name, species, race);

        pets.push(newDog);
      });
    }

    pets.push();
  }

  createTemplate() {
    return `
    <form class=totalForm>
      <input type="text" name="name" placeholder="Name" />
       <input type="text" name="species" placeholder="Species" />
      <input type="text" Name="race" placeholder="Race" />
      <button type="submit" class="form">ADD PET</button>
    </form>
    `;
  }
}
