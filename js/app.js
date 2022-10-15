// DOM Variables
const form = document.querySelector("form");
const inputWrapper = document.querySelectorAll(".input-wrapper");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add("active");
            e.preventDefault();
        } else {
            input.parentElement.classList.remove("active");
        }

        if (input.type === "email") {
            if (!emailValidation(input.value)) {
                input.parentElement.classList.add("active");
                e.preventDefault();
            }
        }
    });
});

// Email Validation Function
function emailValidation(email) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat);
}
