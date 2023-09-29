var logo = document.querySelector('.humburger');
var menu = document.querySelector('.menu');

logo.addEventListener('click', function(){
    menu.classList.toggle ('showmenu');
});