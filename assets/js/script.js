$(document).ready(function () {
    // code here
    var announcementBanner = new Swiper(".announcement-banner", {
        loop: false,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    var heroBanner = new Swiper(".heroBanner", {
        loop: false,
        effect: 'fade',
        autoplay:false,
        pagination: {
            el: ".swiper-pagination",
        },
    });
    var alphaSwiper = new Swiper(".alphaSwiper", {
        spaceBetween: 40,
        slidesPerView: 'auto',
        grabCursor: true,
        autoplay: false,
        breakpoints: {
            640: {
              spaceBetween: 20,
            },
            768: {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            },
            1024: {
              spaceBetween: 40,
            },
          },

    });
    const textAnim = gsap.utils.toArray('.textAnim');
    textAnim.forEach((box, i) => {
        const textanim = gsap.fromTo(box.children, { y: '30px', opacity: 0 ,autoAlpha:0, transition: 'all 1s cubic-bezier(0.23, 0.93, 0.23, 0.93)',}, { duration: 0.8, y: 0, opacity: 1 ,stagger: 1,autoAlpha:1});
        ScrollTrigger.create({
            trigger: box,
            animation: textanim,
            once: false,
        });
    });

    // mobile toggle menu
    $('.toggle_btn').click(function () {
        $(this).toggleClass('active');
        $('.accordian-menu').toggleClass('open');
        $('html').toggleClass('overflow-hidden');
    });
    $('.search-icon').click(function () {
        $(this).toggleClass('active');
        $('.mobile-search').toggleClass('open');
        $('html').toggleClass('overflow-hidden');
    });
    // mobile toggle menu end
    
    $('.search-form .search_svg').click(function(){
        $('.search-form').addClass('open');
    });
    $('.search-form .close_svg').click(function(){
        $('.search-form').removeClass('open');
    });
    $('.accordian-menu .menu .menu-item > a').append('<span class="arrow"></span>');
    $('.accordian-menu .menu .menu-item > a span').on('click', function (e) {
      e.preventDefault();
      $(this).parent().parent().toggleClass('open').find('> ul ').slideToggle();
      $(this).parent().parent().siblings().find('> ul').slideUp();
      $(this).parent().parent().siblings().removeClass('open');
    });
});

