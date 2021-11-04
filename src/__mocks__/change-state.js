import _ from 'lodash';
import 'jest-localstorage-mock';

export const tasks = [
  {
    description: 'cook meal',
    completed: false,
    index: 1,
  },
  {
    description: 'do shopping',
    completed: false,
    index: 2,
  },
  {
    description: 'water the flowers',
    completed: false,
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


populateList(tasks)
const check = [...global.document.querySelectorAll('.checkbox')]

export const changeState = () => {
    tasks[1].completed = check[1].checked;
    localStorage.setItem('task', JSON.stringify(tasks));
    const itemDesc = Array.from(global.document.querySelectorAll('.item-description'));
    // eslint-disable-next-line
    if ((tasks[1].completed = check[1].checked)) {
      itemDesc[1].classList.add('item-description-done');
    } else {
      itemDesc[1].classList.remove('item-description-done');
      itemDesc[1].contentEditable = 'true';
    }
    populateList(tasks)
};





export const checkBox = [...document.querySelectorAll('.checkbox')]

