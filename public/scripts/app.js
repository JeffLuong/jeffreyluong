$(document).ready(function() {
  $(".name").addClass("fadeIn");
  $(".section").addClass("fadeIn");
});

var $hamburger = $("#hamburger-button");
var $root = $('html, body');

function animateHamburger() {
  $hamburger.toggleClass('open');
};

function slideMenu() {
  $("#menu-wrapper").toggleClass('open');
  $("#menu-wrapper").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd',
  function(event) {
    $("ul#menu li").toggleClass('trans-end');
  });
};

$hamburger.on('click', function(){
  slideMenu();
  animateHamburger();
});

$('#app-bio').click(function() {
    $root.animate({
        scrollTop: $(".app-bio").offset().top
    }, 750);
    return false;
});

$('#app-work').click(function() {
  console.log("work button working");
    $root.animate({
        scrollTop: $(".app-work").offset().top
    }, 750);
    return false;
});

$('#app-photography').click(function() {
    $root.animate({
        scrollTop: $(".app-photography").offset().top
    }, 750);
    return false;
});

$('#app-contact').click(function() {
    $root.animate({
        scrollTop: $(".app-contact").offset().top
    }, 750);
    return false;
});

$('.scroll-animate').click(function() {
  if ($("#menu-wrapper").hasClass("open")) {
    slideMenu();
    animateHamburger();
  } else if ($("#menu-wrapper").hasClass("")) {
    return;
  };
});

$('#scroll-top').click(function() {
    $root.animate({
        scrollTop: $(".scroll-animate").offset().top
    }, 750);
    return false;
});

$(window).load(function(){
    var windowHeight   = $(window).height(),
        heightDocument = (windowHeight) + ($('.app-main').height()) + ($('footer').height()) - 20;

    $('.scroll-animate, .scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    window.onscroll = function(){
        var scroll = window.scrollY;
        var scrollPercent = (scroll * 100) / heightDocument;

        $('.scroll-animate-main').css({
          'top' : '-' + scroll + 'px'
        });

        $('.app-header').css({
          'background-position-y' : (50 - scrollPercent) + '%'
        });

        if (scrollPercent > 17) {
          $("#hamburger-button > span").css({
            'background-color' : '#4463A9'
          });
        } else {
          $("#hamburger-button > span").css({
            'background-color' : 'white'
          });
        }
    }
});
