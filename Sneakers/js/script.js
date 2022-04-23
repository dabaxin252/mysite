const btn = document.querySelector('.humberger-btn');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu')
});

AOS.init();