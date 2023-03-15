document.addEventListener("DOMContentLoaded",function(){
    let password = document.querySelector("#password").value;
    let confirmPass = document.querySelector("#confirm").value;
    let error = document.querySelector("error");

    if(password != confirmPass) {
        error.innerText = 'Passwords do not match';
    }
})