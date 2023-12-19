$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
})
$(document).ready(function() {
    $('.review__slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1300,
        dots: true,
        initialSlide: 1,
        touchThreshold: 11,
    });
})
$(document).ready(function () {
    $('.prom').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
})
$(document).ready(function () {
    $('.photos').slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
    });
})

