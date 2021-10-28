import { saveTaskToLocal } from './index';
import { tasks } from './index';
import { inputTask } from './events';

class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const addNewTask = () => {
  const newTask = new Task(inputTask.value);
  if (tasks.length === 0) newTask.index = 1;
  if (tasks.length > 0) newTask.index = tasks.length + 1;
  tasks.push(newTask);
  saveTaskToLocal();
  inputTask.value = '';
  location.reload();
};
