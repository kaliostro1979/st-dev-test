let prevButton = '<img src="./assets/images/icons/nav-left.png" alt="prev">';
let nextButton = '<img src="./assets/images/icons/nav-right.png" alt="next">';

$(".header-banner-slider").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: [
        prevButton,
        nextButton
    ]
});