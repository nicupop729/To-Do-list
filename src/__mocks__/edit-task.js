import 'jest-localstorage-mock';
import _ from 'lodash';

export const tasks = [
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

export const listContainer = global.document.querySelector('.list');

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

populateList(tasks);

export const liItem = [...document.querySelectorAll('.item')];
export const textDescription = [
  ...global.document.querySelectorAll('.item-description'),
];

export const editTask = () => {
  tasks[1].description = textDescription[1].textContent;
  localStorage.setItem('task', JSON.stringify(tasks));
  listContainer.innerHTML = '';
  populateList(tasks);
  // window.location.reload();
};
