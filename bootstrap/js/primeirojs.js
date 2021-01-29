var nome = "Gabriel Stevanelli,20";
var cargo = "Sem trabalho no momento";

var nomehtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
    nomehtml.innerHTML = nome;
}

function logarNome(nome) {
    console.log(nome);
}

function colocarCargoNoHtml (cargo) {
    cargo.innerHTML = cargo;
}

function clickNoSobre() {
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}
function clickNoProjetos() {
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);
logarNome(nome);
    

