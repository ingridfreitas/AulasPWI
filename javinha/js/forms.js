var idade = getElementById("idadePessoa");
var nome = getElementById("nomePessoa");
var anoNascimento = 2020 - idade.value;
console.log(nome);
function saudacao() {
    console.log(nome.value);
    document.write("Olá, " + nome.value);
}
function mudarcor(){
    var cor = getElementById("pagina");
    cor.style.backgroundColor(mudarCor);
}