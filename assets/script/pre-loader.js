
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
        window.location.href = 'content.html';

    }, 3000);
});