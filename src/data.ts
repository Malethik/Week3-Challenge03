/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Dog } from './model/dog';

const id = crypto.randomUUID();

const luna = new Dog(1, 'Luna', 'dog', 'Chiwawa');
const bailey = new Dog(2, 'Bailey', 'dog', 'Pitbull');
const rocky = new Dog(3, 'rocky', 'dog', 'Buldog');
const max = new Dog(4, 'Max', 'dog', 'Jack Rassiel');
const bella = new Dog(5, 'Bella', 'dog', 'Setter');

export const pets = (luna, bailey, rocky, max, bella);
