const controls = document.querySelector("#controls");

const div = document.querySelector("#boxes");
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = controls.children[0];

input.addEventListener("input", handleInput);
create.addEventListener("click", createMarkup);
destroy.addEventListener("click", destroyBoxes);

let size = 30;

function handleInput(event) {
console.log(input.value);
}

function createMarkup(event) {
  if (input.value <= 0 || input.value > 100) {
    return;
  } else {
    createBoxes(input.value)
  }

}



function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    
    const box = document.createElement('div');
    console.dir(div);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '30px'; 
    

   div.append(box);

    size += 10;


  }

}

function destroyBoxes(event) {
  
  input.value = "";
  size = 30;
  return div.innerHTML = '';
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
