$(document).ready(function() {
    //fullpage
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],
        navigation: true,
        navigationPosition: 'right'

    });

    //menu
    $('.tp-mask-wrap').on('click', function (e) {
        $(this).toggleClass('active');
        $('.menu').toggleClass('menu__active');

    })

});