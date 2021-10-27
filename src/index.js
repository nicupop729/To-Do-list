import './style.css';

const listContainer = document.querySelector('.list');

let tasks = [
  {
    description: 'to do the shopping',
    completed: false,
    index: 1,
  },
  {
    description: 'finish your Microverse project',
    completed: false,
    index: 2,
  },
  {
    description: 'bake bread',
    completed: true,
    index: 3,
  },
];

const populateList = (values) => {
  values.map((toDo, i) => {
    const htmlText = `
    <li class="item">
      <input type="checkbox" class="${toDo.completed}" id="${toDo.description[0]}${toDo.index}"/>
      <label for="${toDo.description[0]}${toDo.index}" class="item-description">${toDo.description}</label>
      
      <ion-icon name="ellipsis-vertical-outline" class="three-dots display-dots"></ion-icon>  
    </li>`;

    if (i + 1 === toDo.index) listContainer.innerHTML += htmlText;
  });
};

populateList(tasks);
