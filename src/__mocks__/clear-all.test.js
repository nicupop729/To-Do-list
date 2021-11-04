import { tasks, removeAll } from './clear-all';

describe('test remove all completed', () => {
  test('remove all completed', () => {
    removeAll();
    expect(tasks.length).toBe(1);
  });
  test('test local storage', () => {
    // eslint-disable-next-line
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
