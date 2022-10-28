new WOW().init();
AOS.init();

$(window).scroll(function(){
    var sticky = $("header");
    if($(window).scrollTop() >= 100) {
        sticky.addClass("fixed");
    } else {
        sticky.removeClass("fixed");
    }
});
