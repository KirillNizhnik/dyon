const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', function (){
    menu.classList.toggle('menu-visible');
})