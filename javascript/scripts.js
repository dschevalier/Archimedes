/*---NAVIGATION BAR CHANGE ON SCROLL---*/
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 2) {
            // hide nav
            $("nav").removeClass("onscroll-navbar");
        } else {
            // show nav
            $("nav").addClass("onscroll-navbar");
        }
    });
});

$(document).ready(function () {

    /*---SCROLL TO PROMISE (HOW WE HELP PAGE)---*/
    $('.js-scroll-to-promise').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-section-promise').offset().top - 65
        }, 800);
    });
    /*---SCROLL TO REQUEST CALL (CONTACT PAGE)---*/
    $('.js-scroll-to-request-call').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-section-request-call').offset().top - 65
        }, 800);
    });

});

/*---ANIMATIONS ON SCROLL---*/
$(document).ready(function () {

    /*---FADEIN ON HOMEPAGE FEATURES AND APPROACH NUMBERS---*/
    $('.js-waypoint-1').waypoint(function (direction) {
        $('.js-waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '85%'
    });

    /*---BOUNCE ON HOMEPAGE HOW WE HELP BUTTON---*/
    $('.js-waypoint-2').waypoint(function (direction) {
        $('.js-waypoint-2').addClass('animated pulse');
    }, {
        offset: '85%'
    });

    /*---BOUNCE ON  HOW WE HELP PAGE CONTACT US BUTTON---*/
    $('.js-waypoint-3').waypoint(function (direction) {
        $('.js-waypoint-3').addClass('animated pulse');
    }, {
        offset: '75%'
    });
});

