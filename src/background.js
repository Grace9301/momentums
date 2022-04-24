const summer = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
];
const winter = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
];
const spring = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
];

const bgImage = document.createElement('img');
const date = new Date();
const month = date.getMonth() + 1;

function randomBackground() {
  const chosenSummer = summer[Math.floor(Math.random() * summer.length)];
  const chosenWinter = winter[Math.floor(Math.random() * winter.length)];
  const chosenSpring = spring[Math.floor(Math.random() * spring.length)];
  document.body.appendChild(bgImage);

  if (month === 12 || month <= 2) {
    document.body.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/sunny/${chosenWinter})`;
  } else if (month >= 6 && month < 12) {
    document.body.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/sunny/${chosenSummer})`;
  } else {
    document.body.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/sunny/${chosenSpring})`;
  }
}
randomBackground();
