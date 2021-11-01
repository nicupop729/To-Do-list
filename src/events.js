import _ from 'lodash';
// eslint-disable-next-line import/no-cycle
import { addNewTask } from './class';
// eslint-disable-next-line import/no-cycle
import {
  saveTaskToLocal,
  tasks,
  removeAll,
  listContainer,
  populateList,
} from './index';

export const inputTask = document.querySelector('.input-tasks');
const clearTaskBtn = document.querySelector('.clear-btn');

export const changeState = (value) => {
  const checkBox = document.querySelectorAll('.checkbox');
  _.forEach(checkBox, (check, i) => {
    check.addEventListener('click', () => {
      value[i].completed = check.checked;
      saveTaskToLocal(value);
      const itemDesc = Array.from(
        document.querySelectorAll('.item-description')
      );
      // eslint-disable-next-line
      if ((value[i].completed = check.checked)) {
        itemDesc[i].classList.add('item-description-done');
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

clearTaskBtn.addEventListener('click', () => {
  populateList(tasks);
  listContainer.innerHTML = '';
  // eslint-disable-next-line
  location.reload();
  removeAll();
});
