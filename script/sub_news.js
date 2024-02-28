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

    $('.slide_box').slick({
        slidesToShow: 2.8,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: true,
        responsive:[
            {
                breakpoint: 1850,
                settings: {
                    slidesToShow: 2.7
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2.2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });
});