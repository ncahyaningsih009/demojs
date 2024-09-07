    // this part can also be part of html.js 
    window.addEventListener('DOMContentLoaded', () => {
      let barmenu1 = document.querySelector('menu1[role="navigation"]');
      barmenu1.innerHTML = menu1;
      let barmenu2 = document.querySelector('menu2[role="navigation"]');
      barmenu2.innerHTML = menu2;
      let barmenu3 = document.querySelector('menu3[role="navigation"]');
      barmenu3.innerHTML = menu3;
    });