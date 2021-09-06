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

// Счетчики собранных средсв, в карточках
const counter1 = document.querySelectorAll('.news__helpCard-donateText-val1'),
      counter2 = document.querySelectorAll('.news__helpCard-donateText-val2'),
      lines = document.querySelectorAll('.news__helpCard-donateCounter span');

lines.forEach((item, i) => {
let aa, bb, num, num2;
    aa = counter1[i].innerHTML;
    bb = counter2[i].innerHTML;
    num = num2 = '';

    for (let j = 0; j < aa.length; j++) {
        if (aa[j] != ' ') {
            num += aa[j];
        } else { continue; }
    }
    for (let j = 0; j < bb.length; j++) {
        if (bb[j] != ' ') {
            num2 += bb[j];
        } else { continue; }
    }
    // console.log(+num/(+num2/100));
    lines[i].style.width = `${(+num/(+num2/100))}%`;
});

// Переключаем блоки в секции ВЫ ПОМОГЛИ
const yHelpBtnPrev = document.querySelector('.yoursHelp__btn.prev'),
            yHelpBtnNext = document.querySelector('.yoursHelp__btn.next'),
            yHelpContent = document.querySelectorAll('.yoursHelp__contents');
   
yHelpBtnPrev.addEventListener('click', () => {
    yHelpContent.forEach((item, i) => {
        if (item.classList.contains('active') && i == 0) {
            console.log('левый предел');
        } else if (item.classList.contains('active') && i > 0) {
            yHelpContent[i-1].classList.add ('active');
            item.classList.remove('active');
        }
    });
});
yHelpBtnNext.addEventListener('click', () => {
let j = yHelpContent.length-1;
for (let i of yHelpContent){
    if (yHelpContent[j].classList.contains('active') && j < yHelpContent.length-1) {
        yHelpContent[j+1].classList.add ('active');
        yHelpContent[j].classList.remove('active');
        continue;    
    } else if (yHelpContent[j].classList.contains('active') && j == yHelpContent.length-1) {
        console.log('правый предел');
    }
    j--;
}
});










}); //DOMContentLoaded