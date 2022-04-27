import { sum } from '../sum';

describe('sum()', () => {
  describe.each([
    {
      a: 1,
      b: 3,
      result: 4, // В тесте прописали то, что мы ожидаем
    },
    {
      a: 5,
      b: 3,
      result: 8, // В тесте прописали то, что мы ожидаем
    },
    {
      a: -4,
      b: -20,
      result: -24, // В тесте прописали то, что мы ожидаем
    },
  ])('sum($a, $b)', ({ a, b, result }) => {
    it(`${a} + ${b} should return ${result}`, () => {
      expect(sum(a, b)).toEqual(result);
    });
  });
});
