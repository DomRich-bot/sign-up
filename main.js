const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm");
const error = document.getElementById("error");
const form = document.getElementById("form");
const input = document.querySelectorAll("input")

form.addEventListener('submit', e => {
    if (password.value != confirmPass.value) {
        e.preventDefault();
        error.innerText = '*Passwords do not match'
    } else {
        error.innerText = ''
    }

    if (!form.checkValidity()) {
        e.preventDefault();
        input.classList.add('invalid')
    } else {
        input.classList.remove('invalid')
    }
});

