const body = document.querySelector(".change-color");
const color = document.querySelector(".color")
body.addEventListener("click", handleClick);

function handleClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `- ${body.style.backgroundColor}`


 
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
