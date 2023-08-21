let input = document.querySelector("#email-validator");

input.addEventListener("focus", function(e) {
    console.log("Entrou no input");
});
input.addEventListener("blur", function() {
    console.log("Saiu do input");
});