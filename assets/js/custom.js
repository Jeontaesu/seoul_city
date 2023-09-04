$(function(){
    
    /**
     *  @다국어선택 
     */
    $('#langBtn').click(function(){
       url=$('#langList').val()
       window.open(url);
    })


    /**
     *  @메인슬라이드
     */  
    const mainSlide = new Swiper('.sc-slide .swiper',{
        loop:true,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false,
        },

        pagination:
        {
            el:'.fraction',
            type:"fraction"
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        on:{
            "slideChange":function(){
                if(this.realIndex >= 4){
                    $('.sc-slide .group-nav .btn-nav.citizen').addClass('active').siblings().removeClass('active')           
                }else{
                    $('.sc-slide .group-nav .btn-nav.news').addClass('active').siblings().removeClass('active')
                }
            }
        }
    });

    $('.sc-slide .autoplay').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active').attr('aria-label','자동재생 정지');
            mainSlide.autoplay.start();
        }else{
            $(this).addClass('active').attr('aria-label','자동재생 적용');
            mainSlide.autoplay.stop();
        }
    });

    $('.sc-slide .group-nav .btn-nav').click(function(e){
        e.preventDefault();
        idx=$(this).data('idx');
        $(this).addClass('active').siblings().removeClass('active');

        mainSlide.slideTo(idx)

    });

    

    /**
     * @팝업배너
     */
    const bannerSlide = new Swiper('.banner-slide .swiper',{
        slidesPerView: 3,
        spaceBetween: 43,
        loop:true,

        autoplay: {
            delay: 800,
            disableOnInteraction: false,
        },

        pagination:
        {
            el:'.fraction',
            type:"fraction"
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        }
    })

    $('.banner-slide .autoplay').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active').attr('aria-label','자동재생 정지');
            bannerSlide.autoplay.start();
        }else{
            $(this).addClass('active').attr('aria-label','자동재생 적용');
            bannerSlide.autoplay.stop();
        }
    })


    // sc-related
    $('.sc-related .btn-related').click(function(){

        if($(this).hasClass('active')){
            $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp(200);

            return false;
        }

        $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp(200);
        $(this).addClass('active').siblings('.sub-area').slideDown(200);
    })

    $('.sc-related .btn-related.not').click(function(){
        window.open('https://www.gov.kr/portal/orgInfo?Mcode=11180');action_logging({tr_code:'spread_04'});
    })


    // 접근성 관련

    /* 기존 코드 */
    // $('.sc-related .sub-item:first-child a').keydown(function(e){
    //     key = e.keyCode;

    //     if(key === 9 && e.shiftKey){
    //         $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp(200);
    //     }
    // })
    // $('.sc-related .sub-item:last-child a').keydown(function(e){
    //     key = e.keyCode;

    //     if(key === 9 && !e.shiftKey){
    //         $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp(200);
    //     }
    // })

    /* 정리 코드 */
    $('.sc-related .sub-item a').keydown(function(e){
        const key = e.keyCode;
    
        if(key === 9){
            const isShiftPressed = e.shiftKey;
            const isLastChild = $(this).parent().is(':last-child');
            
            if ((isShiftPressed && !isLastChild) || (!isShiftPressed && isLastChild)) {
                $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp(200);
            }
        }
    });



    
    //btn-top
    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if(curr >= 100){
            $('#topBtn').addClass('show')
        }else{
            $('#topBtn').removeClass('show')
        }
    });

    $('#topBtn').click(function(e){
        e.preventDefault();

        window.scrollTo({top:0,behavior:"smooth"})
    })
    

}) //end