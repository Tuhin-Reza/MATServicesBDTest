document.querySelectorAll('.more-info-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const popupId = this.getAttribute('data-popup');

        // Close all open popups
        document.querySelectorAll('.popup-box').forEach(popup => {
            popup.style.display = 'none';
        });

        // Open the clicked popup
        document.getElementById(popupId).style.display = 'block';
    });
});

// Close button for popups
document.querySelectorAll('.popup-close').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.popup-box').style.display = 'none';
    });
});
