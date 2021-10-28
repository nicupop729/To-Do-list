import _ from 'lodash';
import './style.css';
import { changeState } from './events';

const listContainer = document.querySelector('.list');

export let tasks = [];

export const saveTaskToLocal = (value) => {
  localStorage.setItem('task', JSON.stringify(value));
};

const getTaskFromLocal = () => {
  let dataFromLocal = JSON.parse(localStorage.getItem('task'));
  if (dataFromLocal) {
    _.forEach(dataFromLocal, (data, i) => {
      data.index = i + 1;
      tasks.push(data);
    });
  } else return;
};

getTaskFromLocal();

const populateList = (values) => {
  const sortedTasks = _.sortBy(values, 'index');
  _.forEach(sortedTasks, (toDo) => {
    const htmlText = `
      <li class='item'>
        <input type='checkbox' class='checkbox' id='${toDo.description[0]}${
      toDo.index
    }' ${toDo.completed ? 'checked' : ''}/>
        <span ${
          !toDo.completed ? "contentEditable='true'" : ''
        } class='item-description ${
      toDo.completed ? 'item-description-done' : ''
    }'>${toDo.description}</span>
        <ion-icon name='ellipsis-vertical-outline' class='dynamic-icons'></ion-icon>
      </li>`;

    listContainer.insertAdjacentHTML('beforeend', htmlText);
  });
};

populateList(tasks);
changeState(tasks);
