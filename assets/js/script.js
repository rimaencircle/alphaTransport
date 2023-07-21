$(document).ready(function () {
    
        // code here
          
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('.at-header').addClass('is-sticky');
                $('body').addClass('is-sticky');
            } else {
                $('.at-header').removeClass('is-sticky');
                $('body').removeClass('is-sticky');
            }
        });
        $('p').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
              $this.remove();
          });
          $('p span').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
              $this.remove();
          });
          
        // accordian list
        // $('.accordion-list > li > .accordian-toggle').hide();
            $('.accordion-list > li').click(function() {
                if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".accordian-toggle").slideUp();
                } else {
                $(".accordion-list > li.active .accordian-toggle").slideUp();
                $(".accordion-list > li.active").removeClass("active");
                $(this).addClass("active").find(".accordian-toggle").slideDown();
                }
                return false;
            });
    
            // map tabbing section
            $('.accordion-list li').on('click', function(){
                var target = $(this).attr('data-rel');
                $('.accordion-list li').removeClass('tab-active');
                $(this).addClass('tab-active');
                $("#"+target).fadeIn('slow').siblings(".map-image").hide();
                return false;
            });
          
        // swipersection start
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
            spaceBetween: 0,
            slidesPerView: 'auto',
            autoplay: false, 
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 20, 
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                },
                640: {
                    slidesPerView: 'auto',
                    spaceBetween: 20, 
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                },
                991: {
                slidesPerView: 'auto',
                spaceBetween: 20, 
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                },
                1299: {
                  slidesPerView: 'auto',
                  spaceBetween: 0,
                },
              },
    
        });
        var partnerSwiper = new Swiper(".partnerSwiper", {
            slidesPerView: "2.9",
            spaceBetween: 80,
            breakpoints: {
                0: {
                    spaceBetween: 40,
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: "2",
                }, 
                640: {
                    slidesPerView: "2.5",
                },
                767: {
                    spaceBetween: 50,
                    slidesPerView: "2.3",
                },
                1024: {
                    spaceBetween: 60,
                    slidesPerView: "2.5",
                },
                1400: {
                    spaceBetween: 80,
                    slidesPerView: "2.9",
                },
                1599: {
                    spaceBetween: 0,
                    slidesPerView: "3.7",
                },
              },
        });
        var trioSlider = new Swiper(".at-trio-slider", {
            slidesPerView: 3,
            spaceBetween: 40,
            breakpoints: {
                0: {
                    spaceBetween: 20,
                    slidesPerView: 1.3,
                    centeredSlides: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                }, 
                640: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
    
              },
        });
        // swipersection end
    
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
        
        jQuery('.search-form .search_svg').click(function() {
            console.log("clicked");
            jQuery('.search-form').addClass('open');
          });
          jQuery('.search-form .close_svg').click(function() {
            jQuery('.search-form').removeClass('open');
          });
    
        //  team modal open
        $('[open-modal]').on('click', function(){
            var id = $(this).attr('open-modal');
            $('.modal#' + id).addClass('active');
            $('html').addClass('overflow-hidden');
        });
        //  team modal end
        
        $('[close-modal]').on('click', function(){
            $(this).parents('.modal').removeClass('active');
            $('html').removeClass('overflow-hidden');
        });
            
        $('.accordian-menu .menu .menu-item > a').append('<span class="arrow"></span>');
        $('.accordian-menu .menu .menu-item > a span').on('click', function (e) {
          e.preventDefault();
          $(this).parent().parent().toggleClass('open').find('> ul ').slideToggle();
          $(this).parent().parent().siblings().find('> ul').slideUp();
          $(this).parent().parent().siblings().removeClass('open');
        });
    
        // animation start
        const textAnim = gsap.utils.toArray('.textAnim');
        textAnim.forEach((box, i) => {
            const textanim = gsap.fromTo(box.children, { y: '50px', opacity: 0 ,autoAlpha:0, transition: 'all 500ms cubic-bezier(0.23, 0.93, 0.23, 0.93)',}, { duration: 0.5, y: 0, opacity: 1 ,stagger: 1,autoAlpha:1});
            ScrollTrigger.create({
                trigger: box,
                animation: textanim,
                once: false,
            });
        });
        const zoomAnim = gsap.utils.toArray('.zoomAnim');
        zoomAnim.forEach((box, i) => {
            const zoomanim = gsap.to(box,0.5, { scale: 1.001});
            ScrollTrigger.create({
                trigger: box,
                ease: 'power2.in',
                animation: zoomanim,
                once: false,
            });
        });

});

