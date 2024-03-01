$(function(){

    
     // seromenu

     $(".menubar").click(function(){
        
        $(".seromenu").show();


    });

    $(".seromenu .top button").click(function(){
        
        $(".seromenu").hide();

    });


    $(".title").click(function(){
        
        if($(this).siblings(".submenu").css("height") != "0px"){
            $(this).siblings(".submenu").css({height:'0'})
        }else{ $(this).siblings(".submenu").css({height:'auto'})
            
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

    AOS.init();
});