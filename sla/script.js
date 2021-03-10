$('.oi').hover(function(){
    $('.oi').addClass('.change')
});
$('.oi').click(function(){
    document.write("Olá, Seja Bem-Vindo ao Site!!!")
});
$('.redi').click(function(){
    $('.fonte').css("color", "'#ff0000'")
});
$('#enviar').click(function(){
    var anos = $('#idade').val()
    if(anos >= 18){
        if ($('#codigo').val() == 10){
            alert("Olá Administradora " + $('#nome').val() + " seu Acesso foi Liberado!!!!!")
            window.open('../adidas/index.html')
        }
        else if ($('#codigo').val() == 20){
            alert("Olá Operadora " + $('#nome').val() + " seu Acesso foi Liberado!!!!!")
            window.open('../adidas/index.html')
        }
        else if ($('#codigo').val() == 30){
            alert("Olá Visitante " + $('#nome').val() + " seu Acesso foi Liberado!!!!!")
            window.open('../adidas/index.html')
        }
        else{
            alert("Olá " + $('#nome').val() + " seu Código está Inválido, portanto seu Acesso foi Negado!!!")
        }
    }
    else{
        alert("Olá " + $('#nome').val() + " Seu Acesso foi Negado!!!")
    }
});
$('#resultado').click(function () {
    function soma(x,y) {
        var total = x + y;
        alert(total);
    };
    soma($('#nx').val(), $('#ny').val());
});