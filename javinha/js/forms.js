var ano = 0;
$('.idadePessoa').hide();
$('.check').hide();
$('#enviarIdade').hide();
$('#niver').hide();
$('#enviar').click(function(){
    alert("Olá " + $('#nomePessoa').val() + "! Tudo bem com você? \n Preciso que me informe a sua idade! ");
    $('.idadePessoa').show();
    $('#enviar').hide();
    $('#enviarIdade').show();
});
$('#enviarIdade').click(function(){
    alert("UAU! Você já tem " + $('#idade').val() + " anos? \n Para terminarmos me responda: Já fez aniversário esse ano?");
    $('.check').show();
    $('#enviarIdade').hide();
    $('#niver').show();
});
$('#niver').click(function(){
    if($('#sim').prop("checked") == true) {
        ano = 2020 - $('#idade').val();
        alert("Você nasceu no ano de: " + ano);
    }
    else if ($('#sim').prop("checked") == false){
        ano = 2019 - $('#idade').val();
        alert("Você nasceu no ano de: " + ano);
    }
});