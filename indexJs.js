// var height = $(window).height();
// $('#mainLeftDiv').css('height', height);
// $('#mainCenterDiv').css('height', height);
// $('#mainRightDiv').css('height', height);

//append icons

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
            $(this).css('text-shadow', '2px 1px 8px black');
        });

        // blink
        blink();
        window.setInterval(blink, 8000);
        // window.setInterval(fadeOutShadow, 40000);
    });
});




function blink() {

    setTimeout(fadeOut, 0);
    setTimeout(appear, 6000);
    function fadeOut() {
        $('.edge i').css({color: '#191d36'});

        $('.edge i').css('text-shadow', 'none');

    }

    function appear() {
        for (var i = 1; i < 50; i++) {
            var ran = Math.floor(Math.random() * 304) + 1;
            $('.edge i:eq(' + ran + ')').css({color: '#ffffff'});
            $('.edge i:eq(' + ran + ')').css('text-shadow', '10px 5px 4px black');

        }
    }


}
function fadeOutShadow() {
    for (var i = 0; i < 304; i++) {
        // var ran = Math.floor(Math.random() * 140) + 1;
        $('.edge  i:eq(' + i + ')').css('text-shadow', '0px 0px 0px rgba(31, 30, 31, 0.76)');
    }
}





