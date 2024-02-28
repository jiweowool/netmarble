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

    const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = [
    "OUR MISSION",
  "We entertain the world with fun games."
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);

    AOS.init();
});