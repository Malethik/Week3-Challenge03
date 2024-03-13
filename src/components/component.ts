/* eslint-disable no-undef */
import { Dog } from '../data';
export class Component {
  selector: string;
  template: string = '';
  element!: HTMLElement;
  constructor(selector: string) {
    this.selector = selector;
  }

  unrender() {
    this.element.outerHTML = '';
  }

  mapping() {
    
  }

  render(position: InsertPosition = 'beforeend') {
    const targetElement = document.querySelector<HTMLElement>(this.selector);
    if (!targetElement) return;
    targetElement.insertAdjacentHTML(position, this.template);
    if (position === 'beforeend') {
      this.element = targetElement.lastElementChild! as HTMLElement;
    }
  }
}
