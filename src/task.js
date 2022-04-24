'use strict';

const taskForm = document.querySelector('.task__form');
const taskInput = document.querySelector('.task__input');
const taskLists = document.querySelector('.task__lists');

const TASKS_KEY = 'tasks';

let tasks = [];

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function deleteList(event) {
  const taskList = event.target.parentElement.parentElement;
  taskList.remove();
  tasks = tasks.filter((task) => task.id !== parseInt(taskList.id));
  saveTasks();
}

function createList(newInput) {
  const taskList = document.createElement('li');
  taskList.id = newInput.id;
  const taskText = document.createElement('span');
  const deleteButton = document.createElement('button');
  const icon = document.createElement('i');
  taskText.innerText = newInput.text;
  icon.setAttribute('class', 'fa-solid fa-xmark');
  icon.addEventListener('click', deleteList);
  deleteButton.appendChild(icon);
  taskList.appendChild(taskText);
  taskList.appendChild(deleteButton);
  taskLists.appendChild(taskList);
}

function onSubmit(event) {
  event.preventDefault();
  const newInput = taskInput.value;
  taskInput.value = '';
  const newInputObj = {
    text: newInput,
    id: Date.now(),
  };
  tasks.push(newInputObj);
  createList(newInputObj);
  saveTasks();
}

taskForm.addEventListener('submit', onSubmit);

const savedTasks = localStorage.getItem(TASKS_KEY);

if (savedTasks !== null) {
  const parseTasks = JSON.parse(savedTasks);
  tasks = parseTasks;
  parseTasks.forEach(createList);
}
