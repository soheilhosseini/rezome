app.directive("rightDiv", function () {
    return {
        templateUrl: 'directories/rightdiv.html',
        controller: function () {

            // blink();
            //
            // window.setInterval(blink, 8000);
            // function blink() {
            //
            //     setTimeout(fadeOut,0);
            //     setTimeout(appear,6000);
            //     function fadeOut() {
            //         for (var i = 0; i < 132; i++) {
            //             $('#mainRightDiv i:eq(' + i + ')').css({color: '#322d38'});
            //         }
            //     }
            //     function appear() {
            //         for (var i = 1; i < 10; i++) {
            //             var ran = Math.floor(Math.random() * 132) + 1;
            //             $('#mainRightDiv i:eq(' + ran + ')').css({color: '#4a4453'});
            //             $('#mainRightDiv i:eq(' + ran + ')').css('text-shadow', '2px 1px 3px rgba(31, 30, 31, 0.76)');
            //         }
            //     }
            //
            //
            // }
            // window.setInterval(fadeOutShadow, 40000);
            // function fadeOutShadow() {
            //     for (var i = 0; i < 132; i++) {
            //         // var ran = Math.floor(Math.random() * 140) + 1;
            //         $('#mainRightDiv i:eq(' + i + ')').css('text-shadow', '0px 0px 0px rgba(31, 30, 31, 0.76)');
            //
            //     }
            // }
            //
            // $(document).ready(function () {
            //     $("#mainRightDiv i").hover(function () {
            //         $(this).css('color', 'white');
            //         $(this).css('text-shadow', '2px 1px 3px rgba(31, 30, 31, 0.76)')
            //
            //     });
            // });
        }
    }
});

