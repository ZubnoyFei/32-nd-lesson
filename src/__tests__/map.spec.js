import { map } from '../map';

describe('map()', () => {
  const numbers = [1, 2, 3, 4, 5];
  const callback = (item) => item * 2;

  it('It has to return the new array', () => {
    expect(map(numbers, callback) === numbers).toEqual(false);
  });

  it('It should return the changed array that has been multiplied 2', () => {
    expect(map(numbers, callback)).toEqual([2, 4, 6, 8, 10]);
  });
});
