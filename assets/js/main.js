/*Header Carousel*/

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


/*Partners section carousel*/

let prevPartButton = '<img src="./assets/images/icons/nav-left-white.png" alt="prev">';
let nextPartButton = '<img src="./assets/images/icons/nav-right-white.png" alt="next">';

$(".partners-slider").owlCarousel({
    items: 4,
    dots: false,
    nav: true,
    navText: [
        prevPartButton,
        nextPartButton
    ],
    margin: 36,
    stagePadding: 36,
    responsive: {
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
});

/*Mobile Navigation*/

$('.mobile-burger-btn').on('click', function () {
    $('.mobile-nav').addClass('open')
});

$('.mobile-nav-close-btn').on('click', function () {
    $('.mobile-nav').removeClass('open')
});