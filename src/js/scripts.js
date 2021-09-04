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

// Настройка переключателя сайтов (ОБЩИЙ)
const   siteB = document.querySelector('.siteBF'),
        siteR = document.querySelector('.siteRC'),
        siteToggle = document.querySelectorAll('.site-toggler__item');

siteToggle.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.previousElementSibling.classList.toggle('hide');
        item.classList.toggle('active');
    });
});
siteToggle.forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.classList.toggle('active');
        item.previousElementSibling.classList.toggle('hide');
    });
});
siteToggle.forEach(item => {
    item.addEventListener('click', () => {
    siteB.classList.toggle('active');
    siteR.classList.toggle('active');
    });
});
// Настройка работы главного меню сайта BF
const menuBF = document.querySelectorAll('.menu__item');

menuBF.forEach(item => {
    item.addEventListener('mouseenter', () => {
        menuBF[4].lastElementChild.style = 'left: 32px';    
        // item[4].lastElementChild.style = "left: 87px";
        item.lastElementChild.classList.toggle('active');
    });
});
menuBF.forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.lastElementChild.classList.toggle('active');
    });
});





});