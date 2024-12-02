document.querySelectorAll('.article-details-btn').forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        this.closest('.article-content').querySelector('.article-details-popup').style.display = 'block';
    });
});

document.querySelectorAll('.article-close-btn').forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.preventDefault(); 
        this.closest('.article-details-popup').style.display = 'none';
    });
});