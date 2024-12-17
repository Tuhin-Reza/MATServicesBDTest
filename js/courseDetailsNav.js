$('.custom-nav__toggle-btn').click(function () {
    $(this).toggleClass('custom-active');
    console.log("Clicked menu button");
    $("#custom-mainListDiv").toggleClass("custom-nav__wrapper--visible");
    $("#custom-mainListDiv").fadeIn(500);
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.custom-nav').addClass('custom-highlight');
        $('.custom-nav__toggle-btn i').css('background-color', '#FF0000');
        console.log("OK");
    } else {
        $('.custom-nav').removeClass('custom-highlight');
        $('.custom-nav__toggle-btn i').css('background-color', 'white');
    }
});

$('.custom-nav__wrapper__list__item a, .custom-nav__logo a').click(function () {
    if ($('.custom-nav__toggle-btn').hasClass('custom-active')) {
        $('.custom-nav__toggle-btn').removeClass('custom-active');
        $("#custom-mainListDiv").removeClass("custom-nav__wrapper--visible");
    }
});

function updateLogo() {
    const logo = document.querySelector('.custom-nav__logo a');
    if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
        logo.textContent = 'MAT JLA';
    } else {
        logo.textContent = 'MAT Japanese Language Academy';
    }
}

window.addEventListener('resize', updateLogo);
window.addEventListener('DOMContentLoaded', updateLogo);
