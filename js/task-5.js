const bodyColor = document.querySelector("body");
const button = document.querySelector(".change-color")
const textArea = document.querySelector(".color")

button.addEventListener("click", (event) => {
  bodyColor.style.backgroundColor = getRandomHexColor()
  textArea.textContent = bodyColor.style.backgroundColor
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
