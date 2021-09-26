$(document).ready(function() {
  // 스크롤시 헤더 배경 생김
  $(window).scroll(function(){
    let user_scroll = $(window).scrollTop();
    if(user_scroll > 50){
      $('header').addClass('down');
    } else if(user_scroll < 50){
      $('header').removeClass('down');
    }
  });

  // 모바일에서 gnb
  $(window).resize(function () {
    if($(window).width() < 768) {
      // 일단 사이즈가 작으면 햄버거만 보여라
      $('.gnb_wrap').css({display:'none'});

      $('.gnb_icon .menu_m').on('click',function(){
        $('.gnb_wrap').slideToggle();
      });
    } else if($(window).width() >= 768) {
      $('.gnb_wrap').css({display:'block'});
    } 
  });

  // search아이콘과
  // search를 누르면
    $('.gnb_icon .search_m, .gnb .S').on('click',function(){
      $('main, footer').css({display:'none'});
      $('.search_layer').css({display:'block'});
    });
    $('.search_layer p').on('click',function(){
      $('.search_layer').css({display:'none'});
      $('main, footer').css({display:'block'});
    });


  const swiper = new Swiper(".back_container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }); 

  // aos
  AOS.init();

});
