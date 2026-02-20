// Ожидание загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // Мобильное меню
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            //  переключение класса
            mobileMenu.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                menuBtn.innerHTML = '✕'; // крестик
            } else {
                menuBtn.innerHTML = '☰'; // гамбургер
            }
        });
    }
    
    // Плавная прокрутка к якорям
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
               
                target.scrollIntoView({ behavior: 'smooth' });
                

                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                    if (menuBtn) menuBtn.innerHTML = '☰';
                }
            }
        });
    });
    
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkVisibility() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Если элемент виден на экране
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    }
    
    // Проверка при загрузке
    checkVisibility();
    
    // Проверка при скролле
    window.addEventListener('scroll', checkVisibility);
    
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = '';
            header.style.boxShadow = '';
        }
    });
    
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Я свяжусь с вами в ближайшее время.');
            form.reset();
        });
    }
    
});