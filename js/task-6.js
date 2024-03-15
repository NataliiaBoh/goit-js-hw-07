const controls = document.querySelector("#controls");

const boxesContainer = document.querySelector("#boxes");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector("input");

inputEl.addEventListener("input", handleInput);
btnCreate.addEventListener("click", createMarkup);
btnDestroy.addEventListener("click", destroyBoxes);

let size = 30;

function handleInput(event) {

}

function createMarkup(event) { 
  if (inputEl.value <= 0 || inputEl.value > 100) {
    return;
  } else {
    boxesContainer.innerHTML = '';
    size = 30;
    createBoxes(inputEl.value)
  }

}



function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
   
     boxesContainer.append(box);

    size += 10;
}
}

function destroyBoxes(event) {
  inputEl.value = "";
  size = 30;
  return boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
