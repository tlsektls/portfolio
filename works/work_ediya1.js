$(document).ready(function() {
  $(".title").lettering();

  animation();
});

// function animation() {
//   let title1 = new TimelineMax();
//   title1.staggerFromTo(".title span", 0.8, 
//   {ease: Back.easeOut.config(2), opacity: 0, bottom: -80},
//   {ease: Back.easeOut.config(2), opacity: 1, bottom: 0}, 0.1);
// }

$(document).ready(function() {
  let pub = $('.publishing').offset().top;
  let arrow_wrap = $('.intro img').offset().top;

  $(window).on('scroll',function(){
    let p_scroll = $(window).scrollTop();

    if(p_scroll >= pub && p_scroll < arrow_wrap) {
      $('#work .line1, #work .line2').addClass('active');
    } else {
      $('#work .line1, #work .line2').removeClass('active');
    }
  });
});
