const hamburger = document.querySelector('.hamburger-button')
const navLinks = document.querySelectorAll('.nav-link')

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});
