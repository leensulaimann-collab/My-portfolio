const toggleButton = document.getElementById('lang-toggle');
let isArabic = false;

toggleButton.addEventListener('click', function() {
    isArabic = !isArabic;
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(function(el) {
        if (isArabic) {
            el.textContent = el.getAttribute('data-ar');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });

    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
});
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', function() {
    menuList.classList.toggle('show');
});
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});