var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav-toggle');

pageHeader.classList.remove('page-header--nojs');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-nav-toggle--closed');
    navToggle.classList.add('main-nav-toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-nav-toggle--closed');
    navToggle.classList.remove('main-nav-toggle--opened');
  }
})
