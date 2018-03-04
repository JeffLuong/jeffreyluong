$(document).ready(function() {
  $('.name').addClass('fadeIn');
  $('.section').addClass('fadeIn');
});

let $hamburger = $('#hamburger-button');
let $menuWrapper = $('#menu-wrapper');
let $root = $('html, body');

function animateHamburger() {
  $hamburger.toggleClass('open');
};

function slideMenu() {
  $menuWrapper.toggleClass('open');
  $menuWrapper.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd',
  function(event) {
    $('ul#menu li').toggleClass('trans-end');
  });
};

function animateMenu() {
  slideMenu();
  animateHamburger();
}

function scrollTop(selector) {
  $root.animate({
    scrollTop: $(selector).offset().top
  }, 750);  
}

function scrollAnimate(selector) {
  scrollTop(selector);
  if ($menuWrapper.hasClass('open')) {
    animateMenu();
  }
  return false;
}

$hamburger.on('click', function(){
  animateMenu();
});

//<><><><> Top menu <><><><><>//
$('#app-bio').click(function() {
  return scrollAnimate('.app-bio');
});

$('#app-work').click(function() {
  return scrollAnimate('.app-work');
});

$('#app-photography').click(function() {
  return scrollAnimate('.app-photography');
});

$('#app-contact').click(function() {
  return scrollAnimate('.app-contact');
});

//<><><><> Main menu <><><><>//

$('#app-bio2').click(function() {
  return scrollAnimate('.app-bio');
});

$('#app-work2').click(function() {
  return scrollAnimate('.app-work');
});

$('#app-photography2').click(function() {
  return scrollAnimate('.app-photography');
});

$('#app-contact2').click(function() {
  return scrollAnimate('.app-contact');
});

$('.scroll-animate').click(function() {
  if ($menuWrapper.hasClass('open')) {
    animateMenu();
  }
  return false;
});

$('#scroll-top').click(function() {
  scrollTop('.scroll-animate');
  return false;
});

$(window).load(function(){
  let header = $('.app-header').height();

  $(window).on('scroll', function(){
    let scroll = window.scrollY;

    if (scroll >= header) {
      $('#hamburger-button > span').css({
        'background-color' : '#4D84A6'
      });
    } else {
      $('#hamburger-button > span').css({
        'background-color' : 'white'
      });
    }
  });

  $('.app-year').text(new Date().getFullYear());
});
