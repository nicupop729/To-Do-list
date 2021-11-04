import _ from 'lodash';
import 'jest-localstorage-mock';

const tasks = [
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

const listContainer = document.querySelector('.list');

const populateList = (values) => {
  const sortedTasks = _.sortBy(values, 'index');
  _.forEach(sortedTasks, (toDo) => {
    const htmlText = `
    <li class='item'>
      <input type='checkbox' class='checkbox' id='${toDo.description[0]}${
  toDo.index
}' ${toDo.completed ? 'checked' : ''}/>
      <div class="inside-div">
        <span contentEditable='true' class='item-description ${
  toDo.completed ? 'item-description-done' : ''
}'>${
  toDo.description
}<ion-icon name="trash-outline" class="display-icon trash-icon"></ion-icon></span>
        <ion-icon name='ellipsis-vertical-outline' class='dynamic-icons'></ion-icon>
      </div>
    </li>`;

    listContainer.insertAdjacentHTML('beforeend', htmlText);
  });
};

const deleteIndividualTask = (i) => {
  tasks.splice(i, 1);
  _.forEach(tasks, (task, i) => {
    task.index = i + 1;
  });
  localStorage.setItem('task', JSON.stringify(tasks));
  listContainer.innerHTML = '';
  populateList(tasks);
};

export { deleteIndividualTask, tasks };
