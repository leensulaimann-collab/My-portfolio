let isArabic = localStorage.getItem('lang') === 'ar';

function applyLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(function(el) {
        if (isArabic) {
            el.textContent = el.getAttribute('data-ar');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
}

applyLanguage();

const toggleButton = document.getElementById('lang-toggle');
if (toggleButton) {
    toggleButton.addEventListener('click', function() {
        isArabic = !isArabic;
        localStorage.setItem('lang', isArabic ? 'ar' : 'en');
        applyLanguage();
    });
}

const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('show');
    });
}

document.addEventListener('click', function(event) {
    if (menuList && menuList.classList.contains('show')) {
        const clickedInsideMenu = menuList.contains(event.target);
        const clickedToggleButton = menuToggle.contains(event.target);
        
        if (!clickedInsideMenu && !clickedToggleButton) {
            menuList.classList.remove('show');
        }
    }
});

const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
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
}
