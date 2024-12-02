$('.nav__toggle-btn').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu button");
    $("#mainListDiv").toggleClass("nav__wrapper--visible");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('highlight');
                $('.nav__toggle-btn i').css('background-color', '#FF0000')
                console.log("OK");
            } else {
                $('.nav').removeClass('highlight');
                $('.nav__toggle-btn i').css('background-color', 'white');
            }
});
        
// Close the navbar when a link is clicked
$('.nav__wrapper__list__item a,.nav__logo a').click(function () {
    if ($('.nav__toggle-btn').hasClass('active')) {
        $('.nav__toggle-btn').removeClass('active'); 
        $("#mainListDiv").removeClass("nav__wrapper--visible"); 
    }
});

function updateLogo() {
    const logo = document.querySelector('.nav__logo a');
    if (window.innerWidth >= 320 && window.innerWidth <= 450) {
        logo.textContent = 'MAT JLA'; // Change to "MAT JLA" for small screens
    } else {
        logo.textContent = 'MAT Japanese Language Academy'; // Revert to original for larger screens
    }
}

window.addEventListener('resize', updateLogo);
window.addEventListener('DOMContentLoaded', updateLogo);

