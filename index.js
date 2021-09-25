$(document).ready(function() {
  $("#box_title, #box_title_box").lettering();

    animation();
  });

function animation() {
  let title1 = new TimelineMax();
  title1.staggerFromTo("#box_title span, #box_title_box span", 0.3, 
  {ease: Back.easeOutQuint, opacity: 0, bottom: -100},
  {ease: Back.easeOutQuint, opacity: 1, bottom: 0}, 0.1);
}

$(document).ready(function() {

  // gnb fixed

  var didScroll; 
  var lastScrollTop = 0; 
  var delta = 5; 
  var navbarHeight = $('.gnb_wrap').outerHeight();
  
  $(window).scroll(function(event){ 
    didScroll = true; 
  }); 
  
  setInterval(function() { 
    if (didScroll) { 
      hasScrolled(); 
      didScroll = false; 
    } 
  }, 250);
  
  
  function hasScrolled() { 
    var st = $(this).scrollTop(); 
    // Make sure they scroll more than delta 
    if(Math.abs(lastScrollTop - st) <= delta) 
    return; 
    // If they scrolled down and are past the navbar, add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    
    if (st > lastScrollTop && st > navbarHeight){ 
      $('.gnb_wrap').animate({top: -140},300);
    } else if(st + $(window).height() < $(document).height()) { 
      $('.gnb_wrap').animate({top: 0},300);
      } 
    
    lastScrollTop = st; 
  }
// gnb fixed end


// lines 
let main = $('main').offset().top;
let work_wrap = $('.work_wrap').offset().top;

$(window).on('scroll',function(){
  let w_scroll = $(window).scrollTop();

  if(w_scroll >= main && w_scroll < work_wrap) {
    $('#work .line1, #work .line2').addClass('active');
  } else {
    $('#work .line1, #work .line2').removeClass('active');
  }
});


let project_box = $('.p4').offset().top + 300;
$(window).scroll(function() {
  let w_scroll = $(window).scrollTop();
  console.log(w_scroll, project_box);
  if(w_scroll >= project_box && w_scroll < 4700) {
    $('#about .line1, #about .line2').addClass('active');
  } else {
    $('#about .line1, #about .line2').removeClass('active');
  }      
});


let footer = $('footer').offset().top;
$(window).scroll(function() {
  let w_scroll = $(window).scrollTop();
  console.log(w_scroll, footer);
  if(w_scroll <= footer && w_scroll > 5600) {
    $('#contact .line1, #contact .line2').addClass('active');
  } else if(w_scroll > footer) {
    $('#contact .line1, #contact .line2').addClass('active');
  } else {
    $('#contact .line1, #contact .line2').removeClass('active');
  }      
});

// lines end


// box 왼쪽에서 오른쪽으로 보임
const trigger = new ScrollTrigger.default({
  trigger: {
    once: true,
        offset: {
            element: {
                x: 0,
                y: (trigger, rect, direction) => {
                    return 0.5
                }
            }
          }
        }
  });
  trigger.add('[data-trigger]');
  
  // see more work a 속성 없애기
  $(".work_wrap > div:last-of-type a").removeAttr("href")
  // work 박스 누르면 이미지 띠용띠용
  $(".work_wrap > div:last-of-type a").click(function() {
    $(".working img").animate({top: '30%'}, 1500, 'easeOutElastic');
  });
  $(".working img").click(function() {
    $(".working img").animate({top: '105%'}, 1500, 'easeOutElastic');
  });



  // 위로 부드럽게 올라가기
  $('footer > a[href="#"]').on('click', () => {
    event.preventDefault();
  });

  $('footer > a').on('click', () => {
    $('html, body').animate({scrollTop:0}, 300);
  });

  // 화면이 작으면 안보이게
  if($(window).width() <= 768) {
    $("header, main, footer").css({display: 'none'});
    $(".inform").css({display: 'block'});
  }

});