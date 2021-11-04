import _ from 'lodash';
// eslint-disable-next-line
import {
  saveTaskToLocal,
  tasks,
  listContainer,
  populateList,
} from './index.js';
// eslint-disable-next-line
import { inputTask } from './events.js';

class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
// eslint-disable-next-line
export const addNewTask = () => {
  const newTask = new Task(inputTask.value);
  if (tasks.length === 0) newTask.index = 1;
  if (tasks.length > 0) newTask.index = tasks.length + 1;
  tasks.push(newTask);
  saveTaskToLocal(tasks);
  inputTask.value = '';
  window.location.reload();
};

export const deleteIndividualTask = (i) => {
  tasks.splice(i, 1);
  setTimeout(
    _.forEach(tasks, (task, i) => {
      task.index = i + 1;
    }),
    saveTaskToLocal(tasks),
    (listContainer.innerHTML = ''),
    populateList(tasks),
    window.location.reload(),
    1000,
  );
};
