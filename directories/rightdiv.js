app.directive("rightDiv", function () {
    return {
        templateUrl: 'directories/rightdiv.html',
        controller: function () {

            // blink();
            //
            // window.setInterval(blink, 8000);
            // function blink() {
            //     setTimeout(fadeOut,0);
            //     setTimeout(appear,6000);
            //     function fadeOut() {
            //         for (var i = 0; i < 140; i++) {
            //             $('#mainRightDiv i:eq(' + i + ')').css({color: '#322d38'});
            //         }
            //     }
            //     function appear() {
            //         for (var i = 1; i < 10; i++) {
            //             var ran = Math.floor(Math.random() * 140) + 1;
            //             $('#mainRightDiv i:eq(' + ran + ')').css({color: '#4a4453'});
            //             $('#mainRightDiv i:eq(' + ran + ')').css('text-shadow', '2px 1px 3px rgba(31, 30, 31, 0.76)')
            //         }
            //     }
            // }
            // window.setInterval(fadeOutShadow, 40000);
            // function fadeOutShadow() {
            //     for (var i = 0; i < 140; i++) {
            //         // var ran = Math.floor(Math.random() * 140) + 1;
            //         $('#mainRightDiv i:eq(' + i + ')').css('text-shadow', '0px 0px 0px rgba(31, 30, 31, 0.76)')
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

// window.setInterval(skillsImageFadeIN, 3100);
//
// window.setInterval(skillsImageFadeOut, 3000);
//
//
// function skillsImageFadeIN() {
//         var ran = Math.floor(Math.random() * 8) ;
//         $('#skillsLogo div:eq(' + ran + ') img:eq(0)').css({opacity: '0'});
//         $('#skillsLogo div:eq(' + ran + ') img:eq(1)').css({opacity: '1'});
//     console.log(ran);
// }
// function skillsImageFadeOut() {
//     for (var i = 0; i <8; i++) {
//         $('#skillsLogo div:eq('+i+') img:eq(0)').css({opacity: '1'});
//         $('#skillsLogo div:eq('+i+') img:eq(1)').css({opacity: '0'});
//     }
// }