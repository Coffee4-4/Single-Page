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


                setTimeout(function(){

                    initMap();

                },1000);


                $('.container-conteudo').fadeIn(1000);
                return false;



            }

        )

    }

/*--------------------- Troca Slide ----------------------*/
    var curSlide = 0;
    var maxSlide = $('.slider-single').length -1;
    var delaySlide = 4;
    initSlider();

    function initSlider() {
        $('.slider-single').hide();
        $('.slider-single').eq(0).show();

        for (var i =0; i < maxSlide + 1; i++){
            var botaoSlide = $('.bullets').html();

            if (i==0)
                botaoSlide += '<span class="active-slider"></span>';
            else
                botaoSlide+='<span></span>'

            $('.bullets').html(botaoSlide);
        }

    }
    changeSlide();
    function changeSlide() {
        setInterval(
            function () {
                $('.slider-single').eq(curSlide).stop().fadeOut(2000);
                curSlide++;
                if(curSlide > maxSlide)
                    curSlide = 0;

                $('.slider-single').eq(curSlide).stop().fadeIn(2000);

                $('.bullets span').removeClass('active-slider');
                $('.bullets span').eq(curSlide).addClass('active-slider');

            }, delaySlide*1000);



    }

    $('body').on('click','.bullets span',
        function () {
        var currentBullet = $(this);
        $('.slider-single').eq(curSlide).stop().fadeOut(1000);
        curSlide = currentBullet.index();
        $('.slider-single').eq(curSlide).stop().fadeIn(1000);

        $('.bullets span').removeClass('active-slider');
        currentBullet.addClass('active-slider');
        })




})
