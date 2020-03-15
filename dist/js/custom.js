/*-----------------------------------------------------------
* Template Name    : Busion | Responsive Bootstrap 4 Landing Template
* Author           : SRBThemes
* Version          : 2.0.0
* Created          : February 2018
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

!function($) {
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
                $('.navbar-nav li a').css('color', '#333');
                $('.custom-nav').css('background', 'white');
                $(".mbri-menu").css('color', 'black');
            } else {
                $(".sticky").removeClass("stickyadd");
                $('.st0').css('fill', '#fff');
                $('.navbar-nav li a').css('color', '#ededed');
                $('.custom-nav').css('background', 'transparent');
                $(".mbri-menu").css('color', 'white');
            }
        });
    },

    //Smooth
    BusionApp.prototype.initSmoothLink = function() {
      $('.navbar-nav a, .btn-5').on('click', function(event) {
          // console.log(this);
          var $anchor = $(this);
          $('.navbar-collapse').removeClass('show');
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 70
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
      $('.navbar-toggler').on('click', function(e) {
        if ($(window).scrollTop() <= 50) {
            $('.custom-nav').css('background', 'black');
        }
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
            $('.close-work').show('fast');
            $('#port-items .item').eq(e.currentTarget.id - 1).css('display', 'flex');
        } else {
            // Mobile UI portfolio section interactions
            $('#port-items .item').eq(e.currentTarget.id - 1).css('display', 'inline-block');
            $('#port-items .item').eq(e.currentTarget.id - 2).css('opacity', '0');
            // Disable complete dom mobile scroll
            $('html, body').on('touchstart touchmove', function(e){ 
                //prevent native touch activity like scrolling
                e.preventDefault(); 
           });           
        }
        event.preventDefault();
      });
      $('#work .item .ion-md-close, #port-items .close-work').on('click', function(e) {
        destroyPortfolio();
      });
    },

    //ScrollSpy
    BusionApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
        $(window).on("scroll", function(e) {
            let top = window.scrollY;
            if (top === 0) {
                $(".custom-nav").css("background", "transparent !important");
            }
        });
    },

    //Funfacts
    BusionApp.prototype.mobileFuncs = function() {
        if ($(window).width() <= 750) {
        //   $('.youtube-bg').playerDestroy();
          $('.bg-overlay').css('background', 'url(images/mobile-bg.png) center center no-repeat');
        }
    },

    //Mfpvideo
    BusionApp.prototype.inithomepopvideo = function() {
        // $('.watch-video').magnificPopup({
        //     disableOn: 700,
        //     type: 'iframe',
        //     mainClass: 'mfp-fade',
        //     removalDelay: 160,
        //     preloader: false,
        //     fixedContentPos: false
        // });
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
