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
    $('.gnb_icon .menu_m').on('click',function(){
      $('.gnb_wrap').slideToggle();
    });
    // s 아이콘을 누르면
    $('.gnb_icon .search_m').on('click',function(){
      $('main, footer').css({display:'none'});
      $('.search_layer').css({display:'block'});
    });

  // search를 누르면
    $('.gnb .S').on('click',function(){
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



  //무한 스크롤 
  let pageNum = 1;

  $("#search").click(function () {
      $(".result").html("");

      $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: {
              query: $("#book_search").val(),
              page: pageNum
          },
          headers: {
              Authorization: "KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"
          }

      })
          .done(function (msg) {
              console.log(msg);
              for (let i = 0; i < 5; i++) {
                  $(".result").append("<h2><a href='" + msg.documents[i].url + "'>" + msg.documents[i].title + "</a></h2>");
                  $(".result").append("<p><strong>저자:</strong> " + msg.documents[i].authors + "</p>");
                  $(".result").append("<p><strong>출판사:</strong> " + msg.documents[i].publisher + "</p>");

                  let str = msg.documents[i].contents;
                  str = str.substring(0, 101);//101번째 글자에서 자름

                  $(".result").append("<p><strong>요약:</strong> " + str + "...</p>");
                  $(".result").append("<img src='" + msg.documents[i].thumbnail + "'>");

              }
          });
  })

  $(window).scroll(function () {

      if (Math.ceil($(window).scrollTop()) + $(window).height() >= $(document).height()) {
          pageNum++;


          $.ajax({
              method: "GET",
              url: "https://dapi.kakao.com/v3/search/book?target=title",
              data: {
                  query: $("#book_search").val(),
                  page: pageNum
              },
              headers: {
                  Authorization: "KakaoAK 35df06b87c9a84e66f6530e11460b9a9"
              }

          })
          .done(function (msg) {
              console.log(msg);
              for (let i = 0; i < 5; i++) {
                  $(".result").append("<h2><a href='" + msg.documents[i].url + "'>" + msg.documents[i].title + "</a></h2>");
                  $(".result").append("<p><strong>저자:</strong> " + msg.documents[i].authors + "</p>");
                  $(".result").append("<p><strong>출판사:</strong> " + msg.documents[i].publisher + "</p>");

                  let str = msg.documents[i].contents;
                  str = str.substring(0, 101);//101번째 글자에서 자름

                  $(".result").append("<p><strong>요약:</strong> " + str + "...</p>");
                  $(".result").append("<img src='" + msg.documents[i].thumbnail + "'>");
              }
          });
      }

  });
});