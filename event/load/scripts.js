window.addEventListener("load", function() {
    alert("Obrigado pela visita")
})

window.addEventListener("beforeunload", function(e) {
    e.returnValue = null;
    alert("deseja sair da tela?")
})