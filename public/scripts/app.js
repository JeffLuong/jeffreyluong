$(document).ready(function() {
  $(".name").addClass("fadeIn");
  $(".section").addClass("fadeIn");
});


$(window).load(function(){
    var windowHeight        = $(window).height(),
        heightDocument      = (windowHeight) + ($('.app-main').height());

    $('.scroll-animate, .scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    window.onscroll = function(){
        var scroll = window.scrollY;
        console.log(scroll);

        $('.scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });

        $('.app-header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

    }
});
