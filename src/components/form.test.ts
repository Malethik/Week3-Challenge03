import { Dog } from '../model/dog';

describe('When form get compiled and botton pressed return inserted value', () => {
  const name = 'lilli';
  const species = 'dog';
  const race = 'pitbull';
  const id = 1;
  const result = new Dog(id, name, species, race);
  test('When put lilli, dog, pitbull we expect lilli, dog, pitbull', () => {
    expect(result).toEqual({
      id: 1,
      isAdopted: false,
      name: 'lilli',
      species: 'dog',
      race: 'pitbull',
    });
  });
});
