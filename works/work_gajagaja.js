$(document).ready(function() {

  // 화면이 작으면 안보이게
  $(window).resize(function () {
    if($(window).width() < 1440) {
      $("header, main").css({display: 'none'});
      $(".inform img").css({display: 'block'});
    } else {
      $("header, main").css({display: 'block'});
      $(".inform img").css({display: 'none'});
    }
  });


});