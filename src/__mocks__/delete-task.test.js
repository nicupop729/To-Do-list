import { deleteIndividualTask, tasks } from './delete-task';

describe('test add and delete element', () => {
  test('remove task', () => {
    deleteIndividualTask(0);
    expect(tasks.length).toBe(0);
  });
});
