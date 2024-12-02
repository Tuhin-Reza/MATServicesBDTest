$('.happyMoments-slider-container').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '10px', // This adjusts the space between images in the center mode
    speed: 2000,
    arrows: true,
    accessibility: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 2, // Show 2 images at a time
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2, // Adjust for larger screens
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1, // For smaller screens
                slidesToScroll: 1
            }
        }
    ]
});
