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

    //scroll
    BusionApp.prototype.initStickyMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();
            // Blur video background as user scrolls
            $('.home-table').css('filter', 'blur(' + Math.min(scroll/100, 5) + 'px)');
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
          $(this).find('p').css('display', 'block');
          console.log('test');
          event.preventDefault();
        });
    },
    //ScrollSpy
    BusionApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
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