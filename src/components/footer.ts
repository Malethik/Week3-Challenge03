import { Component } from './component';

export class Footer extends Component {
  adress: string;
  constructor(selector: string, adress: string) {
    super(selector);
    this.adress = adress;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer class="footer">
      <address class="footer__text">${this.adress}</address>
    </footer>
    `;
  }
}
