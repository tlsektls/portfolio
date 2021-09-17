$(function(){
  // 헤더 스크롤 하면 올라감
  $(window).scroll(function(){
    let user_scroll = $(window).scrollTop();
    if(user_scroll > 50){
      $('.head_gnb, nav').addClass('up');
    } else if(user_scroll < 50){
      $('.head_gnb, nav').removeClass('up');
    }
  });

    // ****************  header hambuger toggle
    $('.head_gnb > h1').on('click',function(){
      $('nav').toggleClass('show');
    });


    $('.banner ul li').on('click',function(){
      $('.banner > img').toggleClass('show');
    });

    $('#register > li:last-of-type > a').on('click',function(){
      $('#register li ul.lang_p').toggleClass('show');
    });


});