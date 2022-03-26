
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

//Заход в настроки для смены цвета
const setting = function() {
  const navCont = document.querySelector('.nav_cont');
  const settingNav = document.querySelector('.setting__nav');
  const settingClose = document.querySelector('.setting_close');
  const settingButton = document.querySelector('.setting_button');

  if (settingButton) {
    settingButton.addEventListener('click', ()=> {
         navCont.style.display = 'none';
         settingNav.style.display = 'inline-flex';
    });

  }

  if (settingClose) {
   settingClose.addEventListener('click', ()=> {
     settingNav.style.display = 'none';
        navCont.style.display = 'block';

    });
   }
}


setting();

//смена цвета
const color = function() {


function appTheme(theme) {
   document.body.classList.remove("theme-auto", "theme-green", "theme-gray", "theme-blue", "theme-turquoise");
   document.body.classList.add(`theme-${theme}`);

}
document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#theme").addEventListener("change", function() {
        appTheme(this.value);
   });
});
function appTheme2(themee) {
   document.body.classList.remove("themee-auto", "themee-white", "themee-black");
   document.body.classList.add(`themee-${themee}`);

}
document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#themee").addEventListener("change", function() {
        appTheme2(this.value);
   });
});
}
color();


//Header fixed in mobile
//Загрузка фото
const foto = function() {
   const settingInput = document.querySelector('.setting_input');
   const navImg = document.querySelector('.nav__img');

   settingInput.addEventListener('change', ()=> {
       navImg.src = URL.createObjectURL(settingInput.files[0]);
   });
}
foto();
