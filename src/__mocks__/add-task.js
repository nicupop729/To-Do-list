import 'jest-localstorage-mock';

const inputTask = global.document.querySelector('.input-tasks');

const tasks = [];

class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addNewTask = () => {
  const newTask = new Task(inputTask.value);
  if (tasks.length === 0) newTask.index = 1;
  if (tasks.length > 0) newTask.index = tasks.length + 1;
  tasks.push(newTask);
  localStorage.setItem('task', JSON.stringify(inputTask.value));
  inputTask.value = '';
  // window.location.reload();
};

export { addNewTask, tasks, inputTask };
