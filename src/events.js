import { addNewTask } from './editList';

export const inputTask = document.querySelector('.input-tasks');

export const changeState = (value) => {
  const checkBox = document.querySelectorAll('.checkbox');
  checkBox.forEach((check, i) => {
    check.addEventListener('click', () => {
      value[i].completed = check.checked;
      localStorage.setItem('task', JSON.stringify(value));
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
