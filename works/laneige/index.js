$(document).ready(function() {
  // ****************  swipers
  const swiper1 = new Swiper(".banner", {
    speed: 1000,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay:5000
    }
  });

  const swiper2 = new Swiper(".best_products", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });

  const swiper3 = new Swiper(".live_img", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 2,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 2
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 2
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 2
      }
    }
  });

  // ****************  header hambuger toggle
  $('.icon_menu').on('click',function(){
    $('nav').css({display:'block'});
    $('ul.icon li a img').css({display:'none'});
  });
  $('.close').on('click',function(){
    $('nav').css({display:'none'});
    $('ul.icon li a img').css({display:'block'});
  });

  if($(window).width() > 768) {
    $('.gnb > li > a').on('mouseenter',function(){
      $('.gnb > li > a').removeClass('active');
      $('.gnb > li > a').nextAll('.inner_bg').removeClass('active');

      $(this).stop().addClass('active');
      $(this).nextAll('.inner_bg').stop().addClass('active');
    });
    $('.gnb').on('mouseleave',function(){
      $('.gnb > li > a').removeClass('active');
      $('.gnb > li > a').nextAll('.inner_bg').removeClass('active');
    });

  } else {
    $('.gnb > li > a').on('click',function(){
      $(this).toggleClass('active');
      $(this).nextAll('.inner_bg').toggleClass('active');
    });
  }


  // ****************  live img hover -> txt_box ?????????
  $('.live_img .swiper-wrapper li').on('mouseenter',function(){
    // .animate({??????:???, ??????:???,...}, ????????????, ???????????????, ...)
    $(this).find('.txt').stop().animate({
      bottom: 0
    },300);
    $(this).find('img').stop().animate({
      top: '-10px'
    },300);
  });
  $('.live_img .swiper-wrapper li').on('mouseleave',function(){
    $(this).find('.txt').stop().animate({
      bottom: '-64px'
    },300);
    $(this).find('img').stop().animate({
      top: 0
    },300);
  });


  // ???????????? ???????????? ?????? ?????? 
  AOS.init();
  // ???????????? ?????? ????????? ???????????? ??????
  $(window).scroll(function() {
  
    var $window = $(window),
        $body = $('body'),
        $BG_C = $('.BG_C');
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $BG_C.each(function () {
      var $this = $(this);
      
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
  }).scroll();  


  // ????????? ?????? ?????? ??????
  let gallery = $('.gallery').offset().top;
  let wrap4 = $('.wrap4').offset().top;

  $(window).on('scroll',function(){
    let w_scroll = $(window).scrollTop();

    if(w_scroll >= gallery && w_scroll < wrap4) {
      $('.gallery .g_logo').addClass('show');
    } else {
      $('.gallery .g_logo').removeClass('show');
    }
  });

  // footer ????????? ?????????
  $('address').on('click',function(){
    $('.f_gnb, .consel_w, .lang ').toggleClass('f_toggle');
    $('footer').css({bottom:'0'});
  });

  $('.l_show').on('click',function(){
    // $('ul.langs').css({display:'block'});
    $('ul.langs').toggle();
  });
  $('ul.langs li:first-child img').on('click',function(){
    $('ul.langs').css({display:'none'});
  });




});