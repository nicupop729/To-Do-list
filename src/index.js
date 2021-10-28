import './style.css';
import { changeState } from './events';

const listContainer = document.querySelector('.list');

export let tasks = [];

export const saveTaskToLocal = () => {
  localStorage.setItem('task', JSON.stringify(tasks));
};

const getTaskFromLocal = () => {
  let dataFromLocal = JSON.parse(localStorage.getItem('task'));
  if (dataFromLocal) {
    dataFromLocal.forEach((data, i) => {
      data.index = i + 1;
      tasks.push(data);
    });
  } else return;
};

getTaskFromLocal();

const populateList = (values) => {
  values.forEach((toDo, i) => {
    const htmlText = `
      <li class='item'>
        <input type='checkbox' class='${toDo.completed} checkbox' id='${
      toDo.description[0]
    }${toDo.index}' ${toDo.completed ? 'checked' : ''}/>
        <label for='${toDo.description[0]}${
      toDo.index
    }' class='item-description'>${toDo.description}</label>
        <ion-icon name='ellipsis-vertical-outline' class='dynamic-icons'></ion-icon>
      </li>`;

    listContainer.innerHTML += htmlText;
  });
};

populateList(tasks);
changeState(tasks);
