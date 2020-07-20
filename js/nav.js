// 네비게이션

// 햄버거 버튼
const btnBurger = document.querySelector('.header__btnBurger');
const navOpen = document.querySelector('.nav');

function rightSlide() {
    navOpen.classList.add('nav--active');
}

btnBurger.addEventListener('click', rightSlide);


// 네비게이션 닫기 버튼 
const navbtnClosed = document.querySelector('.nav__btnClosed');

function navClosed() {
    navOpen.classList.remove('nav--active')
}

navbtnClosed.addEventListener('click', navClosed);
 