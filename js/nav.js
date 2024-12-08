$('.nav__toggle-btn').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu button");
    $("#mainListDiv").toggleClass("nav__wrapper--visible");
    $("#mainListDiv").fadeIn(500);

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
        
$('.nav__wrapper__list__item a,.nav__logo a').click(function () {
    if ($('.nav__toggle-btn').hasClass('active')) {
        $('.nav__toggle-btn').removeClass('active'); 
        $("#mainListDiv").removeClass("nav__wrapper--visible"); 
    }
});

function updateLogo() {
    const logo = document.querySelector('.nav__logo a');
    if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
        logo.textContent = 'MAT JLA';
    } else {
        logo.textContent = 'MAT Japanese Language Academy';
    }
}

window.addEventListener('resize', updateLogo);
window.addEventListener('DOMContentLoaded', updateLogo);

