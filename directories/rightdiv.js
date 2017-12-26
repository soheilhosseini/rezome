app.directive("rightDiv", function () {
    return {
        templateUrl: 'directories/rightdiv.html',
        controller: function () {

            blink();

            window.setInterval(blink, 8000);
            function blink() {

                setTimeout(fadeOut,0);
                setTimeout(appear,6000);
                function fadeOut() {
                    for (var i = 0; i < 170; i++) {
                        $('#mainRightDiv i:eq(' + i + ')').css({color: '#1d233a'});
                        $('#mainLeftDiv i:eq(' + i + ')').css({color: '#1d233a'});

                    }
                }
                function appear() {
                    for (var i = 1; i < 3; i++) {
                        var ran = Math.floor(Math.random() * 170) + 1;
                        $('#mainRightDiv i:eq(' + ran + ')').css({color: '#959595'});
                        $('#mainRightDiv i:eq(' + ran + ')').css('text-shadow', '2px 1px 8px black');

                        $('#mainLeftDiv i:eq(' + ran + ')').css({color: '#959595'});
                        $('#mainLeftDiv i:eq(' + ran + ')').css('text-shadow', '2px 1px 8px black');
                    }
                }


            }
            window.setInterval(fadeOutShadow, 40000);
            function fadeOutShadow() {
                for (var i = 0; i < 170; i++) {
                    // var ran = Math.floor(Math.random() * 140) + 1;
                    $('#mainRightDiv i:eq(' + i + ')').css('text-shadow', '0px 0px 0px rgba(31, 30, 31, 0.76)');

                    $('#mainLeftDiv i:eq(' + i + ')').css('text-shadow', '0px 0px 0px rgba(31, 30, 31, 0.76)');


                }
            }

            $(document).ready(function () {
                $("#mainRightDiv i").hover(function () {
                    $(this).css('color', 'white');
                    $(this).css('text-shadow', '2px 1px 8px black')
                });
                $("#mainLeftDiv i").hover(function () {
                    $(this).css('color', 'white');
                    $(this).css('text-shadow', '2px 1px 8px black')
                });
            });
        }
    }
});

