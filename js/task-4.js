const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const formValue = {
        email: email.trim(),
        password: password.trim()
    }
  
    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }
    
    console.log(formValue);
    form.reset();
}