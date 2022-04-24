'use strict';

const today = document.querySelector('.today');
const currentDate = new Date();

const monthOptions = { month: 'short' };
const weekdayOptions = { weekday: 'short' };

function getToday() {
  const date = String(currentDate.getDate()).padStart(2, '0');
  const month = new Intl.DateTimeFormat('en-US', monthOptions).format(
    Date.now()
  );
  const day = new Intl.DateTimeFormat('en-US', weekdayOptions).format(
    Date.now()
  );
  today.innerHTML = `${day}, ${month} ${date}`;
}

getToday();
