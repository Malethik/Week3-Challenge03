/* eslint-disable no-new */
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

import './style.css';

const title = `PET LIST`;
const adress = 'Daniele Quintiliani';

new Header('.app', title);
new Main('.app');
new Footer('.app', adress);
