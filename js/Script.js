$(document).ready(function () {
    //Navbar
    $('.nav-btn span').click(function () {
        $('nav').toggleClass('active').toggleClass('fadeInDown animated');
    })
    //Navbar-Search
    $('.header-search-btn').click(function () {
        $('.header-search').show().addClass('fadeInRight animated');
    })
    $('.header-search i:last-child').click(function () {
        $('.header-search').hide().removeClass('fadeInRight animated');
    })
    //Navbar-Scroll
            $(window).scroll(function () {
                var pos_body = $('html , body').scrollTop();
                if (pos_body > 20) {
                    $('header').addClass('header-scroll');
                } else {
                    $('header').removeClass('header-scroll');
                }
            })        
    //Scroll-Smooth
    $("a[href*='#']:not([href='#]").on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            $('html,body').animate({ scrollTop: $(hash).offset().top }, 1000);
        }
    })

    //Building-your-vision
    $('.building .owl-carousel').owlCarousel({
        loop: true,
        dot: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    //News
    $('#news .owl-carousel').owlCarousel({
        loop: true,
        dot: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    //Products
    $('.product-tittle').click(function () {
        $('.product-tittle').not(this).removeClass('product-active-toggle');
        $('.product-tittle').not(this).next().removeClass('product-content-toggle');
        $(this).next().toggleClass('product-content-toggle').toggleClass('fadeInDown animated');
        $(this).toggleClass('product-active-toggle');
    });

});