$(document).ready(function() {

  // gnb fixed

  $('body').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    
    //스크롤값을 가져온다.
    if(wheel>0){
    //스크롤 올릴때
    $('.gnb_wrap').addClass('active');
    } else {
    //스크롤 내릴때
    $('.gnb_wrap').removeClass('active');
    }
    });
  // gnb fixed end


  // wrap line
  // const line1 = document.querySelector('.line1');
  // const line2 = document.querySelector('.line2');
  // const work = document.querySelector('#work');
  // const about = document.querySelector('#about');
  // const contact = document.querySelector('#contact');

  // addEventListener('scroll', function() {
  //   let wrap_scroll = window.pageYOffset;
  //   console.log(wrap_scroll);

  //   let objHeight_work = work.offsetTop - window.innerHeight;
  //   let objHeight_about = about.offsetTop - window.innerHeight;
  //   let objHeight_contact = contact.offsetTop - window.innerHeight;
  //   if (wrap_scroll >= objHeight_work) {// 배너 보임
  //     line1.classList.add('active');
  //     line2.classList.add('active');
  //   } else if (wrap_scroll < objHeight_work) {// 배너 숨김
  //     line1.classList.remove('active');
  //     line2.classList.remove('active');
  //   } else if (wrap_scroll < objHeight_about) {
  //     line1.classList.add('active');
  //     line2.classList.add('active');
  //   } else if (wrap_scroll < objHeight_about) {
  //     line1.classList.remove('active');
  //     line2.classList.remove('active');
  //   } else if (wrap_scroll < objHeight_contact) {
  //     line1.classList.add('active');
  //     line2.classList.add('active');
  //   } else if (wrap_scroll < objHeight_contact) {
  //     line1.classList.remove('active');
  //     line2.classList.remove('active');
  //   }
  // });
  const work_line1 = document.querySelector('#work > .line1');
  const work_line2 = document.querySelector('#work > .line2');
  const about = document.querySelector('#work');

  addEventListener('scroll', function() {
    let scroll_1 = window.pageYOffset;
    console.log(scroll_1);
    let objHeight_work = work.offsetTop - window.innerHeight;
    if (scroll_1 >= objHeight_work) {// 배너 보임
      work_line1.classList.add('active');
      work_line2.classList.add('active');
    } else if (scroll_1 < objHeight_work) {// 배너 숨김
      work_line1.classList.remove('active');
      work_line2.classList.remove('active');
    }
  });

  // const about_line1 = document.querySelector('#about > .line1');
  // const about_line2 = document.querySelector('#about > .line2');
  // const about = document.querySelector('#about');
  // addEventListener('scroll', function() {
  //   let scroll_2 = window.pageYOffset;
  //   console.log(scroll_2);
  //   let objHeight_about = about.offsetTop - window.innerHeight;
  //   if (scroll_2 >= objHeight_about) {// 배너 보임
  //     about_line1.classList.add('active');
  //     about_line2.classList.add('active');
  //   } else if (scroll_2 < objHeight_about) {// 배너 숨김
  //     about_line1.classList.remove('active');
  //     about_line2.classList.remove('active');
  //   }
  // });
    // wrap line


    // box event
     $('.work_wrap .box').on({
      'mouseenter': function(){
        $('.work_wrap .box::after').animate({ backgroundColor: '#12b881', dispaly: 'block' },1000);
      },
      'mouseleave': function(){
        $('.work_wrap .box::after').animate({backgroundColor: '#FFF', dispaly: 'none' },1000);
      }
    });


});