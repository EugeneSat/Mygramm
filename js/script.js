
const navClose = document.querySelector(".nav__close");
const headerToggle = document.querySelector(".header__toggle");
const main = document.querySelector(".main");



if (navClose) {
  navClose.addEventListener('click', ()=>{
    main.classList.remove('show__menu');
  });
}
if (headerToggle) {
  headerToggle.addEventListener('click', ()=>{
    main.classList.add('show__menu');
    
  });
}
