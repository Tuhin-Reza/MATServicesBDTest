$(document).ready(function () {
    $('.successStroy-slider-container').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3, // Show 3 videos at a time
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Slide change speed
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Show 2 videos on smaller screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Show 1 video on extra small screens
                    slidesToScroll: 1,
                }
            }
        ]
    });
});