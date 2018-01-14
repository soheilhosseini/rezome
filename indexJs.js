// envelope
$('#primitiveDiv img').mouseenter(function () {
    $('#primitiveDiv img:eq(0)').css('opacity','0');
    $('#primitiveDiv img:eq(1)').css('opacity','1');

});
$('#primitiveDiv img').mouseleave(function () {
    $('#primitiveDiv img:eq(0)').css('opacity','1');
    $('#primitiveDiv img:eq(1)').css('opacity','0');
});


$('#primitiveDiv img').click(function () {
    $('#primitiveDiv').css('display','none');
    $('#mainDiv').css('display','flex');
    $('#mainDiv').css('opacity','1');

    $.get("rightdiv.html", function (data) {
        for (var x = 0; x < 8; x++) {
            $('.edge ').append(data);
        }

        for (var x = 0; x < 12; x++) {
            $('.edgeHeader ').append(data);
        }

    }).then(function () {
        // hover
        $(".edge  i").mouseenter(function () {
            $(this).css('color', 'white');
            $(this).css('text-shadow', '7px 5px 4px black');
        });
        $(".edgeHeader  i").mouseenter(function () {
            $(this).css('color', 'white');
            $(this).css('text-shadow', '7px 5px 4px black');
        });

        // blink
        // blink();
        //     var inter=window.setInterval(blink, 10000);


        //image clicking
        // $(".faceImgDiv").click(function () {
        //     // restarting interval and timeout
        //     //stop
        //     clearInterval(inter);
        //     if (typeof appearTimeout!=='undefined'){
        //         clearTimeout(appearTimeout);
        //     }
        //     //start
        //     inter=window.setInterval(blink, 10000);
        //     //clear
        //     fadeOut();
        //     // lightup fonts
        //     for (var i=0;i<40;i++){
        //         var rand = Math.floor(Math.random() * 8000) ;
        //         setTimeout(faceClick,rand);
        //     }
        //     $(".faceImgDiv img:first-child").css('opacity','0');
        //     $(".faceImgDiv img:nth-child(3)").css('opacity','1');
        //     $(".faceImgDiv img:nth-child(3)").css('opacity','1');
        // });
        // function faceClick() {
        //     for (var i = 1; i < 5; i++) {
        //         var ran = Math.floor(Math.random() * 304) + 1;
        //         $('.edge i:eq(' + ran + ')').css({color: '#e9e012'});
        //         $('.edge i:eq(' + ran + ')').css('text-shadow', '0px 0px 35px #e9e012');
        //     }
        // }
    });
});




function blink() {
    setTimeout(fadeOut, 0);
    appearTimeout=setTimeout(appear, 8000);
}



function fadeOut() {
    $('.edge i').css({color: '#191d36'});
    $('.edge i').css('text-shadow', 'none');

    $('i.icons').css('font-size','23px');
    $('i.icon-php').css('font-size','20px');
    $('i.icon-materiaze').css('font-size','18px');
    $('i.icon-linkedin').css('font-size','19px');
    $('i.icon-javascript').css('font-size','30px');

    $(".faceImgDiv img:nth-child(1)").css('opacity','1');
    $(".faceImgDiv img:nth-child(3)").css('opacity','0');
}

function appear() {
    for (var i = 1; i < 50; i++) {
        var ran = Math.floor(Math.random() * 304) + 1;
        $('.edge i:eq(' + ran + ')').css({color: '#495a74'});
        $('.edge i:eq(' + ran + ')').css('text-shadow', '5px 3px 15px black');
    }
}
