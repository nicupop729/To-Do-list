const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const newDom = new JSDOM(`<!DOCTYPE html>
<main class="container">
<div class="title-div">
  <p class="title-to-do">Today's To Do</p>
  <ion-icon
    name="refresh-outline"
    class="static-icons enter-icon"
  ></ion-icon>
</div>
<form class="input-div">
  <input
    type="text"
    placeholder="Add to you list..."
    class="input-tasks"
  />
  <ion-icon name="enter-outline" class="static-icons"></ion-icon>
</form>
<ul class="list"></ul>
<div class="clear-btn-div">
  <button class="clear-btn">Clear all completed</button>
</div>
</main>`);

global.document = newDom.window.document;
global.window = newDom.window;
