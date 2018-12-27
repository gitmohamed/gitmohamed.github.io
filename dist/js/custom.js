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
            $('.home-table').css('filter', 'blur(' + Math.min(scroll/100, 5) + 'px)');
            // $('.home-table').css('transform', `rotate3d(1, 0, 0, ${Math.min(scroll/5, 50)}deg)`);
            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
                window.innerWidth<800 ? null : $('.st0').css('fill', '#000');
            } else {
                $(".sticky").removeClass("stickyadd");
                window.innerWidth<800 ? null : $('.st0').css('fill', '#fff');
            }
        });
    },

    //Smooth
    BusionApp.prototype.initSmoothLink = function() {
      $('.navbar-nav a, .bus_home_btn a').on('click', function(event) {
          console.log(this);
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 70
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
      $('#work .mt-3 a').on('click', function(e) {
        console.log(e);
        $('#port-items').addClass('shown');
        event.preventDefault();
      });
    },

    //ScrollSpy
    BusionApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    //Funfacts
    BusionApp.prototype.initFunfact = function() {
        // var a = 0;
        // $(window).on('scroll',function() {
        //     var oTop = $('#counter').offset().top - window.innerHeight;
        //     if (a == 0 && $(window).scrollTop() > oTop) {
        //         $('.lan_fun_value').each(function() {
        //             var $this = $(this),
        //                 countTo = $this.attr('data-count');
        //             $({
        //                 countNum: $this.text()
        //             }).animate({
        //                     countNum: countTo
        //                 },
        //                 {
        //                     duration: 2000,
        //                     easing: 'swing',
        //                     step: function() {
        //                         $this.text(Math.floor(this.countNum));
        //                     },
        //                     complete: function() {
        //                         $this.text(this.countNum);
        //                         //alert('finished');
        //                     }

        //                 });
        //         });
        //         a = 1;
        //     }
        // });
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
        this.initFunfact();
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
