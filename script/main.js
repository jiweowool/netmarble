$(function(){


    // seromenu

    $(".menubar").click(function(){
        
        $(".seromenu").show();

    });

    $(".seromenu .top button").click(function(){
        
        $(".seromenu").hide();

    });


    $(".title").click(function(){

        /*
        title 안에 있는 submenu의 height가 변경되어야한다.
        
        눌렀던 title에게만 적용이 되어sub메뉴가 내려와야함
        -> this 를 사용해서 해결
        -> this = click한 title

        
        title 안에 submenu를 지정해야한다.
        ->submenu를 찾는 메서드를 사용한다.
        -> 요소 선택메서드 
           parent : 나의 부모요소를 부름
           find , children : 나의 자식요소를 부름
           siblings : 나의 형제관계 요소를 부름
        
        ->.title과 .submenu는 형제관계이므로 siblings를 사용


        /*
        
        눌렀을때  height 값이 0px이 아니면 이미 sub 메뉴가 나와있는것이기 때문에
        대입이 아닌 대입 반대적용 != 사용

        this(=.title)의 / .siblings(형제관계)중에 / ("적용되어야할 class명")(.submenu)의
        / .css의 / ("css타입")(height)값이 / != (값이 아닐때) / (적용할값)(0px) 가 조건
        
        
        if(.title의 형제관계중 .submenu의 css중 height값이 0px이 아닐경우){
            height:'0'이 되어라 (height값이 0이 아니라면 이미 submenu가 나와있는 것이기 때문, 이를 0으로 올림)
        }else{
            height:'auto'가 되어라 (height값이 0이라면 메뉴가나와야하기 때문에 이를 auto로 바꾼다.)
        } 

        */
        
        
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

    // $('#slide_box').slick({
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     speed: 1500
    // });

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