const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const input = event.currentTarget.value.trim();
    if (input === '') {
       output.textContent = 'Anonymus'
    }
    else {
        output.textContent = input;
    }
      
})