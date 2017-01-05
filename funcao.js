var nome;
$(document).ready(function () {
    $("#geral").hide();
    $("#tooltip").tooltip();
    $("#next").click(function () {
        nome = $("#namewarp").val();
        if (nome == '') { 
            alert("Insira um nome na caixa");
        } else {
            console.log($("#namewarp").val());
            $("#geral").show();
            $("#inicio").hide();
            $("#coments").hide();
        }
        return false;
    });
    
    var caixa = $("#caixa");
    //funções referentes ao primeiro botão
    $("#ola").click(function () {
        caixa.animate({
            left: '500px',
            opacity: '0.5'
        });
        var selectedEffect = "pulsate";

        var options = {};

        if (selectedEffect === "scale") {
            options = {
                percent: 50
            };
        } else if (selectedEffect === "size") {
            options = {
                to: {
                    width: 200,
                    height: 60
                }
            };
        }


        $("#ola").hide(selectedEffect, options, 1000);
        return false;
    });
    //funções referentes ao segundo botão
    $("#ola1").click(function () {
        caixa.animate({
            height: '400px',
            width: '200px'
        });
        var selectedEffect = "fold";

        var options = {};

        if (selectedEffect === "scale") {
            options = {
                percent: 50
            };
        } else if (selectedEffect === "size") {
            options = {
                to: {
                    width: 200,
                    height: 60
                }
            };
        }


        $("#ola1").hide(selectedEffect, options, 1000);
        return false;
    });
    //funções referentes ao segundo botão
    $("#ola2").click(function () {
        caixa.animate({
            opacity: '0.8',
            fontsize: '5px'
        });
        var selectedEffect = "shake";

        var options = {};

        if (selectedEffect === "scale") {
            options = {
                percent: 50
            };
        } else if (selectedEffect === "size") {
            options = {
                to: {
                    width: 200,
                    height: 60
                }
            };
        }


        $("#ola2").hide(selectedEffect, options, 1000);
        return false;
    });
    //funções referentes ao segundo botão
    $("#ola3").click(function () {
        caixa.animate({
            height: '500px',
            width: '300px',
            opacity: '1',
            fontSize: 'medium'
        });
        var selectedEffect = "explode";

        var options = {};

        if (selectedEffect === "scale") {
            options = {
                percent: 50
            };
        } else if (selectedEffect === "size") {
            options = {
                to: {
                    width: 200,
                    height: 60
                }
            };
        }


        $("#ola3").hide(selectedEffect, options, 1000);
        $("#coments").show();
        return false;
    });
    //funções referentes ao segundo botão

    $("#adeus").click(function () {

        var options = {};

        if ("highlight" === "scale") {
            options = {
                percent: 50
            };
        } else if ("highlight" === "size") {
            options = {
                to: {
                    width: 200,
                    height: 60
                }
            };
        }


        caixa.hide("highlight", options, 1000);
        $("#adeus").hide("highlight", options, 1000)
        return false;
    });
    //utilizado para dar reload a página
    $("#reload").click(function () {
        location.reload();
        return false;
    });
    //return false;

    $('#send').click(function () {
        console.log($('#comentbox').val());
        mensagemsql = $('#comentbox').val();
        nomesql = $('#namewarp').val();
        mensagemsql = $('#comentbox').val();
        nomesql = $('#namewarp').val();
          $.ajax({
                url: 'action.php',
                dataType: 'json',
                data: {
                    mensagem: mensagemsql,
                    nome : nomesql,
                },
                type: 'POST',
                error: function(){console.log('erro')},
                success: function(data){
                    console.log(data);
                    $('#coments').append("<p>"+ nomesql + ":"+mensagemsql+"</p>"); 
                    $('#comentbox').val('');
                }
            });

});
//utilizado para fazer mexer a caixa principal

$(function () {
    $("#caixa").draggable();

    return false;
});
var nomesql;
var mensagemsql;

});

   