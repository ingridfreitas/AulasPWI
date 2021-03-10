$('#esconderDesenho').click(function(){
    $('#drax').hide();
})
$('#aparecerDesenho').click(function(){
    $('#drax').show();
});
$('#esconderSerie').click(function(){
    $('#groot').hide();
})
$('#aparecerSerie').click(function(){
    $('#groot').show();
});
$('#esconderFilmes').click(function(){
    $('#rocket').hide();
})
$('#aparecerFilmes').click(function(){
    $('#rocket').show();
});
$('#fundoPrimary').click(function(){
    $('body').addClass('bg-primary')
    $('#enviar').addClass('btn btn-warning')
    $('.color').addClass('blank')
});
$('#fundoSecondary').click(function(){
    $('body').addClass('bg-secondary')
    $('.color').addClass('blank')
});
$('#fundoSuccess').click(function(){
    $('body').addClass('bg-success')
    $('.color').addClass('blank')
});
$('#fundoDanger').click(function(){
    $('body').addClass('bg-danger')
    $('.color').addClass('blank')
});
$('#fundoWarning').click(function(){
    $('body').addClass('bg-warning')
});
$('#fundoInfo').click(function(){
    $('body').addClass('bg-info')
    $('#enviar').addClass('btn btn-warning')
    $('.color').addClass('blank')
});
$('#fundoLight').click(function(){
    $('body').addClass('bg-light')
});
$('#fundoDark').click(function(){
    $('body').addClass('bg-dark')
    $('.color').addClass('blank')
});
$('#vanish').click(function(){
    $('body').removeClass('bg-dark bg-light bg-info bg-warning bg-danger bg-sucess bg-secondary bg-primary')
    $('.color').removeClass('blank')
    $('#enviar').removeClass('btn btn-warning')
});
$('#enviar').click(function(){
    alert("Nome: " + $('#nome').val() + "\n E-Mail: " + $('#email').val() + "\n Mensagem: " + $('#mensagem').val());
});