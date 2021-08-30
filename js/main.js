(function() {
    var header = $('#header');

    // gnb 토글
    $('.gnb').on('mouseenter', function() {
        header.addClass('on');
    }).on('mouseleave', function() {
        header.removeClass('on');
    });

    // 헤더 sitemap
    $('#header .btn_sitemap').on('click', function() {
        $('body').addClass('on');
        $('#header .sitemap_wrap').css('display','flex');
    });

    $('#header .sitemap_wrap .btn_close').on('click', function() {
        $('body').removeClass('on');
        $('#header .sitemap_wrap').hide();
    });

    // 모바일 side메뉴
    $('#header .btn_side').on('click', function() {
        // 모바일 side메뉴 토글버튼
        $(this).toggleClass('on');
        // side메뉴 좌우이동, 스크롤막기
        $('#header .side_menu, body').toggleClass('on');

        // side버튼에 on이 없으면 500ms뒤에 side메뉴 초기화
        if(!$(this).hasClass('on')) {
            setTimeout(function() {
                $('.side_menu .depth1>li>a').removeClass('on');
                $('.side_menu .depth2').slideUp();
            }, 500);
        }
    });

    // 모바일side 아코디언메뉴
    $('#header .side_menu .depth1>li>a').on('click', function() {
        $(this).toggleClass('on').parent().siblings().find('>a').removeClass('on');

        $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').stop().slideUp(); 
    });

    // 메인슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        effect: 'fade',
        speed:1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction:false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                $('.main_slider .swiper-slide').addClass('on');
            },
        },
    });

    animateMaincom();
    
    // 메인 company 스크롤 애니메이션
    
    // 메인com 위치를 resize마다 계속 갱신
    function animateMaincom() {

        var posY = 0;
        var mainCom = $('.main_com');
        /* 반응형에서는 섹션들의 높이가 가변이므로 요소의 위치를 resize에서 갱신을 시켜야한다 */
        $(window).resize(function() {
            posY = $('.main_com').offset().top;
            
            
        }).trigger('resize');
        $(window).scroll(function() {
            var sc = $(this).scrollTop();
            
            if(sc >= posY - 500) {
                $('.main_com').addClass('on');
            } else if(sc === 0) {
                $('.main_com').removeClass('on');
            }
            
        }).trigger('scroll');
    }

    /* animateMainProcess();
    
    function animateMainProcess() {

        var posY = 0;
        var mainProcess = $('.main_process');
        $(window).resize(function() {
            posY = $('.main_process').offset().top;
            
            
        }).trigger('resize');
        $(window).scroll(function() {
            var sc = $(this).scrollTop();
            
            if(sc >= posY - 500) {
                $('.main_process').addClass('on');
            } else if(sc === 0) {
                $('.main_process').removeClass('on');
            }
            
        }).trigger('scroll');
    } */
    
    // process animation 기능
    var navs = $(".process_list li");

    setInterval(function(){
        var cur = $(".process_list > .active").index();
        var nxt = (cur + 1) % navs.length;
        navs.eq(cur).removeClass("active");
        navs.eq(nxt).addClass("active");
        console.log(cur, nxt);
    }, 1000);

    //develope slider
    /* var developeSlider = new Swiper('.main_develope', {
        loop: true,
        speed:1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction:false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }); */
    $('.develope_img_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        asNavFor: '.develope_txt_slider',
        prevArrow: '.develope_prev',
        nextArrow: '.develope_next'
    });
    $('.develope_txt_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.develope_img_slider',
        arrows: false,
        dots: false,
        fade: true,
        centerMode: true,
        focusOnSelect: true
    });

    // 헤더 sitemap
    $('.contact_view').on('click', function() {
        $('body').addClass('on');
        $('.agree_popup_wrap').css('display','flex');
    });

    $('.agree_popup_wrap .btn_close').on('click', function() {
        $('body').removeClass('on');
        $('.agree_popup_wrap').hide();
    });



/*     var moveItem = $('.process_list li');
    cnt = 0;


    var item = document.querySelectorAll('.process_list li');
    var cnt = 0; 

    function activeFunc(){
        item[cnt].classList.add('active');
        cnt++;    
        if(cnt >= item.length){
            clearInterval(addActive);
        }loop;
    }

    var addActive = setInterval(activeFunc, 200); 
     */
    
})();