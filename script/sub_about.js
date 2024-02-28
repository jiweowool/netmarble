$(function () {

    $(".bt1").click(function () {

        $(".bt1").css({
            color: '#000',
        });
        $(".bts1").css({
            color: '#FFCA05',
        });

        $(".bt2").css({
            color: '#d9d9d9',
        });
        $(".bts2").css({
            color: '#d9d9d9',
        });

        $(".bt3").css({
            color: '#d9d9d9',
        });
        $(".bts3").css({
            color: '#d9d9d9',
        });

        $("#about_vision").show();
        $("#about_ci").hide();
    });

    $(".bt3").click(function () {

        $(".bt3").css({
            color: '#000',
        });
        $(".bts3").css({
            color: '#FFCA05',
        });

        $(".bt2").css({
            color: '#d9d9d9',
        });
        $(".bts2").css({
            color: '#d9d9d9',
        });

        $(".bt1").css({
            color: '#d9d9d9',
        });
        $(".bts1").css({
            color: '#d9d9d9',
        });

        $("#about_ci").show();
        $("#about_vision").hide();
    });




    $(".b1").click(function () {

        $(".b1").css({
            color: '#fff',
            backgroundColor: '#5C3725',
            fontWeight: '900'
        });
        $(".b2").css({
            color: '#d2d2d2',
            backgroundColor: '#f6f6f6',
            fontWeight: '100'
        });

        $("#ci .content .ci_content").show();
        $(".font_content").hide();
    });



    $(".b2").click(function () {

        $(".b2").css({
            color: '#fff',
            backgroundColor: '#5C3725',
            fontWeight: '900'
        });
        $(".b1").css({
            color: '#d2d2d2',
            backgroundColor: '#f6f6f6',
            fontWeight: '100'
        });
        
        $(".font_content").show();
        $("#ci .content .ci_content").hide();
    });

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
});