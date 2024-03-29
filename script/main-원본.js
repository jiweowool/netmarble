$(function(){


    // seromenu

    $(".menubar").click(function(){
        
        $(".seromenu").show();
        $(".submenu").hide();

    });

    $(".seromenu .top button").click(function(){
        
        $(".seromenu").hide();

    });


    $(".seromainmenu>li").on({
        mouseover:function(){
            $(".serosubmenu",this).stop().slideDown();
        },
        mouseout:function(){
            $(".serosubmenu",this).stop().slideUp();
        }
    });

    //가로메뉴

    $(".h_mainmenu,.h_submenu").on({
        mouseover:function(){
            $(".h_submenu").stop().slideDown();

            $("header").css({
                backgroundColor:'#fff',
                transition: '.5s'
            });
            $("header h1 a:nth-child(1)").css({
                display:'none'
            });
            $("header h1 a:nth-child(2)").css({
                display:'block'
            });
            $(".h_mainmenu ul li").css({
                color:'#5C3725',
                textAlign: 'left'
            });
        },
        mouseout:function(){
            $(".h_submenu").stop().slideUp();
            $("header").css({
                backgroundColor:'inherit',
                transition: '.5s'
            });
            $("header h1 a:nth-child(2)").css({
                display:'none'
            });
            $("header h1 a:nth-child(1)").css({
                display:'block'
            });
            $(".h_mainmenu ul li").css({
                color:'#fff',
                textAlign: 'center'
            });
        }
    });

    $('#slide_box').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500
    });

    $('.slide_box').slick({
        slidesToShow: 4.5,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        responsive:[
            {
                breakpoint: 1860,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3.5
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3.2
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3.5
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 3.2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2.8
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2.6
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 2.4
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 2.2
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
});


AOS.init();

});