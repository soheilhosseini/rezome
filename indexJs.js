// var height = $(window).height();
// $('#mainLeftDiv').css('height', height);
// $('#mainCenterDiv').css('height', height);
// $('#mainRightDiv').css('height', height);

//append icons
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
    $('#mainDiv').css('display','block');
    $('#mainDiv').css('opacity','1');

    $.get("rightdiv.html", function (data) {
        for (var x = 0; x < 8; x++) {
            $('.edge ').append(data);
        }
    }).then(function () {
        // hover
        $(".edge  i").hover(function () {
            $(this).css('color', 'white');
            $(this).css('text-shadow', '7px 5px 4px black');
        });
        // blink
            blink();
            window.setInterval(blink, 8000);

        // click
        $(".edge  i").click(function () {
            $(this).css('font-size', '35px');

        });

        //image clicking
        $(".faceImgDiv").click(function () {
            for (var i=0;i<20;i++){
                var rand = Math.floor(Math.random() * 3000) ;
                setTimeout(faceClick,rand);
            }
        });
        function faceClick() {
            for (var i = 1; i < 7; i++) {
                var ran = Math.floor(Math.random() * 304) + 1;
                $('.edge i:eq(' + ran + ')').css({color: '#e9e012'});
                $('.edge i:eq(' + ran + ')').css('text-shadow', '0px 0px 35px #e9e012');
            }
        }
    });
});




function blink() {

    setTimeout(fadeOut, 0);
    setTimeout(appear, 6000);
    function fadeOut() {
        $('.edge i').css({color: '#191d36'});
        $('.edge i').css('text-shadow', 'none');
        $('i.icons').css('font-size','23px');
        $('i.icon-php').css('font-size','20px');
        $('i.icon-materiaze').css('font-size','18px');
        $('i.icon-linkedin').css('font-size','19px');
        $('i.icon-javascript').css('font-size','30px');

    }

    function appear() {
        for (var i = 1; i < 50; i++) {
            var ran = Math.floor(Math.random() * 304) + 1;
            $('.edge i:eq(' + ran + ')').css({color: '#ffffff'});
            $('.edge i:eq(' + ran + ')').css('text-shadow', '7px 5px 4px black');

        }
    }


}




