const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", handleClick);

function handleClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = `${body.style.backgroundColor}`


 
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
