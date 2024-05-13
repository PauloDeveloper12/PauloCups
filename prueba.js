document.querySelector(".button_sign-up").addEventListener("click", function(event) {
    event.preventDefault(); 
    register();
});

document.querySelector(".button_login").addEventListener("click", function(event) {
    event.preventDefault(); 
    login();
});


var formularioregister = document.querySelector(".form_container_create-account");
var formulariologin = document.querySelector(".form_container_login");

function register() {
    formularioregister.style.display = "block";
    formulariologin.style.display = "none";
}

function login() {
    formularioregister.style.display = "none";
    formulariologin.style.display = "block";
}