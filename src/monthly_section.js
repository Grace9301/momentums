'use strict';

const monthlyForm = document.querySelector('.monthly__form');
const monthlyInput = document.querySelector('.monthly__input');
const monthlyLists = document.querySelector('.monthly__lists');

const GOALS_KEY = 'goals';

let goals = [];

function saveGoals() {
  localStorage.setItem(GOALS_KEY, JSON.stringify(goals));
}

function monthlyDeleteList(event) {
  const goalList = event.target.parentElement.parentElement;
  goalList.remove();
  goals = goals.filter((goal) => goal.id !== parseInt(goalList.id));
  saveGoals();
}

function monthlyCreateList(newInput) {
  const goalList = document.createElement('li');
  goalList.id = newInput.id;
  const goalText = document.createElement('span');
  const deleteButton = document.createElement('button');
  const icon = document.createElement('i');
  goalText.innerText = newInput.text;
  icon.setAttribute('class', 'fa-solid fa-xmark');
  icon.addEventListener('click', monthlyDeleteList);
  deleteButton.appendChild(icon);
  goalList.appendChild(goalText);
  goalList.appendChild(deleteButton);
  monthlyLists.appendChild(goalList);
}

function monthlyOnSubmit(event) {
  event.preventDefault();
  const newInput = monthlyInput.value;
  monthlyInput.value = '';
  const newInputObj = {
    text: newInput,
    id: Date.now(),
  };
  goals.push(newInputObj);
  monthlyCreateList(newInputObj);
  saveGoals();
}

monthlyForm.addEventListener('submit', monthlyOnSubmit);

const savedGoals = localStorage.getItem(GOALS_KEY);

if (savedGoals !== null) {
  const parseGoals = JSON.parse(savedGoals);
  goals = parseGoals;
  parseGoals.forEach(monthlyCreateList);
}
