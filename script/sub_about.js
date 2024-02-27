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
});