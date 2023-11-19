(function ($) {
    'use strict';
    $(document).ready(function () {
    new WOW().init();

    
    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });
    $(window).scroll(function() {    
        var scroll = $(window).scroll();
        console.log(scroll)
        if (scroll >= 500) {
            
            $(".clearHeader").addClass("darkHeader");
        } else {
            $(".clearHeader").removeClass("darkHeader");
        }
    });

    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    if( height  > 1400 ) {
        const nav = $(".thrown-header-area.sticky-header");
        let scrolled = false;
        console.log("s")
        $('body').scroll(function () {
            if (100 < $('body').scrollTop() && !scrolled) {
                nav
                    .addClass("sticky-nav")
                    .animate({ "margin-top": "0px" });
                scrolled = true;
            }
            if (100 > $('body').scrollTop() && scrolled) {
                nav.removeClass("sticky-nav").css("margin-top", "0px");
                scrolled = false;
            }
        });
    }
    // Preloader
    $(document).ready(function () {
        setTimeout(function () {
            $('.loader_bg').fadeToggle();
        }, 1000);

    });


    $(document).ready(function () {
        // sticky menu===================
        var wind = $(window);
        var sticky = $('#sticky-mobile');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 100) {
                sticky.removeClass('sticky-mobile-menu');
            } else {
                sticky.addClass('sticky-mobile-menu');
            }
        });

    });

    $(document).ready(function () {
        // sticky menu===================
        var wind = $(window);
        var sticky = $('#navbar');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 100) {
                sticky.removeClass('sticky-menu');
            } else {
                sticky.addClass('sticky-menu');
            }
        });

    });
 /*
       Post Gallery Slider
       ============================*/
       $(".post-gallery").slick({
        slidesToShow: 1,
        infinite: false,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 300,
        prevArrow:
            "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:
            "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });
    
    $(".brand_list").slick({
        slidesToShow: 6,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1000,
        prevArrow:
            "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa fa-long-arrow-left'></i></button>",
        nextArrow:
            "<button type='button' class='slider-arrow-btn next-btn'><i class='fa fa-long-arrow-right'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                },
            },
        ],
    });


    // Script nav
    $(".team-btn").click(function () {
        $(this).siblings(".team-socail-icon").toggleClass('active');
    });
});
})(jQuery);