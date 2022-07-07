var C1=window.document.getElementById("area");
C1.addEventListener("click", clicar)
C1.addEventListener("mouseenter", entrar)
C1.addEventListener("mouseout", sair)

function clicar(){
    C1.innerText="Clicou!"
    C1.style.background="red"
}
function entrar(){
    C1.innerText="Entrou!"
}
function sair(){
    C1.innerText="Saiu!"
    C1.style.background="rgb(196, 141, 247)"
}