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
        heightDocument = (windowHeight) + ($('.app-main').height()) + ($('footer').height());

    $('.scroll-animate, .scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    $(window).on('scroll', function(){
        var scroll = window.scrollY;
        var scrollPercent = Math.floor((scroll * 100) / heightDocument);

        if (scrollPercent > 10.5) {
          $("#hamburger-button > span").css({
            'background-color' : '#4463A9'
          });
        } else {
          $("#hamburger-button > span").css({
            'background-color' : 'white'
          });
        }
    });
});
