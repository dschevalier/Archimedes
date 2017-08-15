/*---NAVIGATION BAR CHANGE ON SCROLL---*/
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 5) {
            // hide nav
            $("nav").removeClass("onscroll-navbar");
        } else {
            // show nav
            $("nav").addClass("onscroll-navbar");
        }
    });
});

/*---CONTACT PAGE MAP---*/
new GMaps({
    div: '#map',
    lat: 42.3296446,
    lng: -72.6320807,
    zoom: 13,
    scrollwheel: false
});


