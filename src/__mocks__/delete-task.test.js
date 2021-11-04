import { deleteIndividualTask, tasks } from './delete-task';

describe('test add and delete element', () => {
  test('remove task', () => {
    deleteIndividualTask(1);
    expect(tasks.length).toBe(2);
  });
  test('test local storage', () => {
    // eslint-disable-next-line
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
