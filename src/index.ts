/* eslint-disable array-callback-return */
/* eslint-disable no-new */
import { Header } from './components/header';
import { Main } from './components/main';
import { Card } from './components/card';
import { Footer } from './components/footer';
import { pets } from './data';
import './style.css';

const title = `PET LIST`;
const adress = 'Daniele Quintiliani';

new Header('.app', title);
new Main('.app');
pets.map((item) => {
  new Card('main', item);
});
new Footer('.app', adress);
