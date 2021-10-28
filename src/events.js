import { addNewTask } from './editList';
import { saveTaskToLocal } from './index';

export const inputTask = document.querySelector('.input-tasks');

export const changeState = (value) => {
  const checkBox = document.querySelectorAll('.checkbox');
  checkBox.forEach((check, i) => {
    check.addEventListener('click', () => {
      value[i].completed = check.checked;
      saveTaskToLocal(value);
      const itemDesc = Array.from(
        document.querySelectorAll('.item-description')
      );
      if ((value[i].completed = check.checked)) {
        itemDesc[i].classList.add('item-description-done');
        itemDesc[i].contentEditable = 'false';
      } else {
        itemDesc[i].classList.remove('item-description-done');
        itemDesc[i].contentEditable = 'true';
      }
    });
  });
};

inputTask.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (inputTask.value !== '') {
      addNewTask();
    }
  }
});
