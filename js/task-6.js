const boxGallery = document.querySelector(".boxes")
const btnDestroy = document.querySelector(".destroy-btn")
const btnCreate = document.querySelector(".create-btn")
const input = document.querySelector(".input-number")

btnCreate.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  else {
    input.value = "";
  }
});

btnDestroy.addEventListener("click", () => {
  boxGallery.innerHTML = "";
  input.value = "";
})

function createBoxes(amount) {
  boxGallery.innerHTML = "";
  let size = 30;
    for (let i = 0; i < amount; i++) {
const box = document.createElement("div");
  box.classList.add("div-item");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor()
      box.style.margin = '5px';
      boxGallery.appendChild(box);
      size += 10;
  }   
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

