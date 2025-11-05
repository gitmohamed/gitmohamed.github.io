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
            if(window.innerWidth > 900) {
                $('.home-table').css('transform', `translateY(${scroll/5}px)`);
                $('.home-table').css('opacity', `${1 - Math.max(scroll/800, 0)}`);
            }
            // $('.home-table').css('transform', `rotate3d(1, 0, 0, ${Math.min(scroll/5, 50)}deg)`);
            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
                $('.st0').css('fill', '#000');
                $('.navbar-nav li a').css('color', '#333');
                $('.navbar-brand').css('color', '#333');
                $('.custom-nav').css('background', 'white');
                $(".mbri-menu").css('color', 'black');
            } else {
                $(".sticky").removeClass("stickyadd");
                $('.st0').css('fill', '#fff');
                $('.navbar-nav li a').css('color', '#ededed');
                $('.navbar-brand').css('color', '#ededed');
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
      $('#work .mt-3, #work .portfolio-card').on('click', function(e) {
        // Find the parent element with ID if clicked on portfolio-card
        var targetElement = $(this).hasClass('portfolio-card') ? $(this).closest('.mt-3') : $(this);
        var targetId = targetElement.attr('id');
        
        // console.log(targetId);
        if ($('body').css('overflow') != 'hidden') {
            $('body').css('overflow', 'hidden');
        }
        $('#port-items').fadeIn('fast');
        $('#port-items .item').hide();
        $('#port-items .item').eq(targetId - 1).css('opacity', '1');
        if (window.innerWidth > 768) {
            $('.close-work').show('fast');
            $('#port-items .item').eq(targetId - 1).css('display', 'flex');
        } else {
            // Mobile UI portfolio section interactions
            $('#port-items .item').eq(targetId - 1).css('display', 'inline-block');
            $('#port-items .item').eq(targetId - 2).css('opacity', '0');
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
// Portfolio Filter Functionality
$(document).ready(function() {
    $('.filter-btn').on('click', function() {
        var filterValue = $(this).data('filter');
        
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter portfolio items
        if (filterValue === 'all') {
            $('.portfolio-item').removeClass('hidden');
        } else {
            $('.portfolio-item').each(function() {
                if ($(this).data('category') === filterValue) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            });
        }
    });
});