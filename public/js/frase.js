$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


function fraseAleatoria(){
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){
        $(".error").show();
        setTimeout(function(){
            $(".error  ").toggle();
        },3000);
       
    })
    .always(function(){
        $("#spinner").toggle();

    });
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase_id").val();
    var dados = {id: fraseId};
    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail(function(){
        $(".error").show();
        setTimeout(function(){
            $(".error  ").toggle();
        },3000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var aleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[aleatorio].texto);  
    atualizaTempoInicial(data[aleatorio].tempo);
    inicializaMarcadores();
   
}

