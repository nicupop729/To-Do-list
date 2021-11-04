import { addNewTask, tasks, inputTask } from './add-task';

describe('test add element', () => {
  test('add element with valid input', () => {
    inputTask.value = 'bake bread';
    if (inputTask.value !== '') {
      addNewTask();
    }
    expect(tasks.length).toBe(1);
  });
  test('add element with invalid input', () => {
    inputTask.value = '';
    if (inputTask.value !== '') {
      addNewTask();
    }
    expect(tasks.length).toBe(1);
  });
  test('test local storage', () => {
    // eslint-disable-next-line
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
