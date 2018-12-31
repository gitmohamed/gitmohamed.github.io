/*-----------------------------------------------------------
* Template Name    : Busion | Responsive Bootstrap 4 Landing Template
* Author           : SRBThemes
* Version          : 2.0.0
* Created          : February 2018
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    var BusionApp = function() {};

    // $('.contact-me').css({'transform': 'translate(0, 0)', 'opacity': 1});

    //scroll
    BusionApp.prototype.initStickyMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();
            // Animate work section
            // Game Stats
            // $('.gStats1').css('transform', 'translate(-' + scroll/50 + 'px)');
            // $('.gStats3').css('transform', 'translate(' + scroll/50 + 'px)');
            // Live Coin Price
            // window.innerWidth<800 ? null : $('.back-img').css('left', '-' + Math.min(scroll/150, 100) + 'vw');
            // Blur video background as user scrolls
            $('.home-table').css('transform', `translateY(${scroll/5}px)`);
            $('.home-table').css('opacity', `${1 - Math.max(scroll/800, 0)}`);
            // $('.home-table').css('transform', `rotate3d(1, 0, 0, ${Math.min(scroll/5, 50)}deg)`);
            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
                $('.st0').css('fill', '#000');
                $(".mbri-menu").css('color', 'black');
            } else {
                $(".sticky").removeClass("stickyadd");
                $('.st0').css('fill', '#fff');
                $(".mbri-menu").css('color', 'white');
            }
        });
    },

    //Smooth
    BusionApp.prototype.initSmoothLink = function() {
      $('.navbar-nav a, .bus_home_btn a').on('click', function(event) {
          // console.log(this);
          var $anchor = $(this);
          $('.navbar-collapse').removeClass('show');
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 70
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
      $('#work .mt-3').on('click', function(e) {
        // console.log(e.currentTarget.id);
        if ($('body').css('overflow') != 'hidden') {
            $('body').css('overflow', 'hidden');
        }
        $('#port-items').fadeIn('fast');
        $('#port-items .item').hide();
        $('#port-items .item').eq(e.currentTarget.id - 1).css('opacity', '1');
        if (window.innerWidth > 768) {
            $('#port-items .item').eq(e.currentTarget.id - 1).css('display', 'flex');
        } else {
            // Mobile UI portfolio section interactions
            $('#port-items .item').eq(e.currentTarget.id - 1).css('display', 'inline-block');
            $('#port-items .item').eq(e.currentTarget.id - 2).css('opacity', '0');
        }
        event.preventDefault();
      });
      $('#work .item .mdi-window-close').on('click', function(e) {
        if ($('body').css('overflow') === 'hidden') {
            $('body').css('overflow', 'auto');
        }
        $('#port-items').fadeOut('fast');
        // $('#port-items .item').css('opacity', '0');
      });
    },

    //ScrollSpy
    BusionApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    //Funfacts
    BusionApp.prototype.mobileFuncs = function() {
        if ($(window).width() < 900) {
          $('#video').css('display', 'none');
          $('.h-100vh').css('background', 'url(images/mobile-bg.png)')
        }
    },

    //Mfpvideo
    BusionApp.prototype.inithomepopvideo = function() {
        $('.watch-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    BusionApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.mobileFuncs();
        this.inithomepopvideo();
    },
    //init
    $.BusionApp = new BusionApp, $.BusionApp.Constructor = BusionApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.BusionApp.init();
}(window.jQuery);
