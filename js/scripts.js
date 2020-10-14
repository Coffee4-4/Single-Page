$(function () {

   /* ---------------MENU----------------- */
    $('nav.mobile').click(function () {
        var listaMenu = $('nav.mobile ul');

        if (listaMenu.is(':hidden') == true) {
            var icone = $('.botao-menu-mobile').find('i');

            icone.removeClass('fas fa-bars');
            icone.addClass('fas fa-times-circle');
            listaMenu.slideToggle();

        } else {
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fas fa-times-circle');
            icone.addClass(' fas fa-bars');
            listaMenu.slideToggle();

        }
    })

/*-----------------CARREGAR ELEMENTOS ANIMATION -----------------*/

    var atual = -1;
    var max = $('.box-projetos').length -1;
    var timer;
    var delayAnimation = 2;

    exAnimation();
    function exAnimation() {
        $('.box-projetos').hide();
        timer=setInterval(animacaoLog,delayAnimation*1000);

        function animacaoLog() {
            atual++;
            if (atual > max){
                clearInterval(timer);
                return false;
            }
            $('.box-projetos').eq(atual).fadeIn();
        }
    }

/*-------------------------scroll -----------------------------*/
    if ($('scrol').length > 0) {

        var elemento = '#' + $('scrol').attr('scrolValor');
        var divScroll = $(elemento).offset().top;

        $('html,body').animate({'scrollTop': divScroll}, 1500);
    }

/*---------------------Carregamento  Dinamico ------------------------------*/
    carregarDinamico();
    function carregarDinamico() {
        $('[realtime]').click(
            function () {
                var pagina = $(this).attr('realtime');
                $('.container-conteudo').hide();
                $('.container-conteudo').load(include_path + 'pages/' + pagina +'.php');

                $('.container-conteudo').fadeIn(1000);
                return false;

            }

        )

    }



})
