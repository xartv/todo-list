import { sum } from 'pages/TestPage/utils/sum';

describe('test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('test', () => {
    expect(true).toBe(true);
  });
});
