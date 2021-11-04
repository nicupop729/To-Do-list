// eslint-disable-next-line import/no-mutable-exports
export let tasks = [
  {
    description: 'cook meal',
    completed: true,
    index: 1,
  },
  {
    description: 'do shopping',
    completed: false,
    index: 2,
  },
  {
    description: 'water the flowers',
    completed: true,
    index: 3,
  },
];

const updateTasks = (data) => {
  tasks = data;
};

export const removeAll = () => {
  updateTasks(tasks.filter((task) => task.completed === false));
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  localStorage.setItem('task', JSON.stringify(tasks));
};
