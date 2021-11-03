// import { populateList } from './src/index';
// import _ from 'lodash';

describe('my function', () => {
  test('add list item failed', () => {
    document.body.innerHTML = `
      <ul class="list">
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
        </li>
        </ul>
        `;

    expect().toHaveLength();
  });
});

// document.body.innerHTML =
// '<div>' +
// '  <ul id="list"></li>' +
// '</div>';
// addItem();
// const list = document.querySelectorAll('#list li');
// expect(list).toHaveLength(1);

//describe('my function', () => {
// const task = [
//   {
//     description: 'bake bread',
//     completed: false,
//     index: 1,
//   },  // ];

//   const populateList = (values) => {
//     const sortedTasks = _.sortBy(values, 'index');
//     _.forEach(sortedTasks, (toDo) => {
//       document.body.innerHTML = `
//       <ul class="list">
//       <li class='item'>
//         <input type='checkbox' class='checkbox' id='${toDo.description[0]}${
//         toDo.index
//       }' ${toDo.completed ? 'checked' : ''}/>
//         <div class="inside-div">
//           <span contentEditable='true' class='item-description ${
//             toDo.completed ? 'item-description-done' : ''
//           }'>${
//         toDo.description
//       }<ion-icon name="trash-outline" class="display-icon trash-icon"></ion-icon></span>
//           <ion-icon name='ellipsis-vertical-outline' class='dynamic-icons'></ion-icon>
//         </div>
//         </li>
//         </ul>
//         `;
//       const listContainer = document.querySelector('.list');

//       // listContainer.insertAdjacentHTML('beforeend', htmlText);
//     });
//   };
//   populateList(task);
//   const list = document.querySelectorAll('.item');

//   test('add list item failed', () => {
//     expect(list).toHaveLength(1);
//   });
// });
