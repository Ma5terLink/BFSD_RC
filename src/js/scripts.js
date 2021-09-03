"use strict";
document.addEventListener('DOMContentLoaded', () => {
     // Плавный скролл и класс pageup
$(window).scroll(function () {
    /* console.log($(this).scrollTop()) */
    if ($(this).scrollTop() > 700) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#up']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: '0'});
    /* КАК РАБОТАЕТ ФУНКЦИЯ НИЖЕ - ПОКА НЕ ПОНЯЛ..
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}); */
    return false;
});

/* window.addEventListener('DOMContentLoaded', () => {
const menuSalonsBtn = document.querySelector('.menu__linkbar-btn'),
        salonsLinks = document.querySelector('.ourSalonsLinks'),
        salonsItem = document.querySelectorAll('.ourSalonsLinks__item'),
        salonsOverlay = document.querySelector('.ourSalonsLinks__overlay');
    
    salonsItem.forEach(item => {
        item.addEventListener('click', () => {
            menuSalonsBtn.classList.toggle('active');
            salonsLinks.classList.toggle('active');
        });
    });
    salonsOverlay.addEventListener('click', () => {
        salonsLinks.classList.toggle('active');
    });

    menuSalonsBtn.addEventListener('click', () => {
        salonsLinks.classList.toggle('active');
    });
}); */


});