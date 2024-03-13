import { Component } from './component';

import './card.css';

export class Card extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
     <div class="card">
     <ul>
        <li>Name: ${this.name}</li>
        <li>Species:${this.species}</li>
        <li>Race:${this.race}</li>
        <li>ID:${this.id}</li>
     </ul>
     </div>
    `;
  }
}
