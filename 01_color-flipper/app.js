const colors = ["green", "red", "lightblue", "lightsalmon", "lightsteelblue"];

const btn = document.getElementById("btn");
// TODO 1: use "getElementsByClassName" instead of "querySelector" and make changes accordingly

// const color = document.querySelector(".color");
const color = document.getElementsByClassName("color")[0];
// TODO 2: use arrow function in function definitions

// btn.addEventListener('click', function () {
//   const randomNumber = getRandomNumber();
//   console.log(randomNumber);
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}