import { textDescription, editTask, tasks } from './edit-task';

describe('test edit element', () => {
  test('edit task', () => {
    textDescription[1].textContent = 'buy milk and bread';
    if (textDescription[1].textContent !== '') {
      editTask();
    }
    expect(tasks[1].description).toBe('buy milk and bread');
  });
  test('test local storage', () => {
    // eslint-disable-next-line
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
