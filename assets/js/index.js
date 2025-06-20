const recommendation = new Swiper(".swiper-recommendation", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
  allowTouchMove: true, 
  simulateTouch: false,
   slideToClickedSlide: false, 
  touchReleaseOnEdges: false, 
  a11y: false,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.recommendation-next',
    prevEl: '.recommendation-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: true,
    },
    992: {
      spaceBetween: 10,
      slidesPerView: 3,
      centeredSlides: false,
    },
    1199: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
}
});

const trust = new Swiper(".swiper-trust", {
	slidesPerView: "auto",
	spaceBetween: 20,
	speed: 4000,
  direction: "horizontal",
  loop: true,
  freeMode: true,
  zoom: true,
  keyboard: true,

  autoplay: {
    delay: 0
  },
});

const sale = new Swiper(".swiper-sale", {
	slidesPerView: "auto",
	loop: true,
  spaceBetween: 24,
	speed: 4000,
  direction: "horizontal",
  loop: true,
  freeMode: true,
  zoom: true,
  keyboard: true,

  autoplay: {
    delay: 0
  },
});

const team = new Swiper(".swiper-team", {
	slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  roundLengths: true,
  navigation: {
    nextEl: '.team-next',
    prevEl: '.team-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 28,
    },
}
});

const reviews = new Swiper(".swiper-reviews", {
  loop: true,
  navigation: {
    nextEl: '.review-next',
    prevEl: '.review-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
    },
}
});

$(".userPhone").inputmask({"mask": "+7(999) 999-99-99"});

 $(".menu-nav .nav-item").click(function(){
  $(this).toggleClass('showMenuList');
});

$(".menu-btn").click(function(){
  $(this).toggleClass('clickedMenu');
  $('.menu').toggleClass('d-none');
  $('body').toggleClass('bodyStopScroll');
});

$(".sort-list li").click(function(){
  $('.sort-head .active').text(this.innerHTML)
  $(".sort-list li").removeClass('active')
  $(this).addClass('active')
});

 $(document).ready(function() {
  $('.tab-list').hide();
  $('.tab-list:first-child').show();
  $('.tab-btn').click(function() {
    let pageInfo = $(this).attr('data-tab');
    $('.tab-list').hide();
    $('.' + pageInfo).show();
  })
});


$(".mob-select").click(function(){
  // $('.sort-head .active').text(this.innerHTML)
  $(".tab-btns").toggleClass('show')
  // $(this).addClass('active')
});


$(".tab-btn span").click(function(){
  $('.mob-select .active').text(this.innerHTML)
  $(".tab-btns").removeClass('show')
});




const submitBtn = document.querySelectorAll('.submit-btn');

submitBtn.forEach(submit => {
  submit.addEventListener('click', () => {
    let userName = submit.parentElement.children[1].children[1];
    let userPhone = submit.parentElement.children[2].children[1];
    let userEmail = submit.parentElement.children[3].children[1];
    let userMessage = submit.parentElement.children[4].children[1];
    
    const userNameVal = userName.value.trim(),
      userEmailVal = userEmail.value.trim(),
      userPhoneVal = userPhone.value.trim(),
      userMessageVal = userMessage.value.trim();

  if(userNameVal == '' || userName.value.length < 2) {
    setError(userName)
  } else {
    setSuccess(userName)
  }

  if(userEmailVal === '') {
    setError(userEmail)
  }
  else if(!isEmail(userEmailVal)) {
    setError(userEmail)
  }
   else {
    setSuccess(userEmail)
  }

  if(userPhoneVal == '' || userPhone.value.substr(-1) === '_') {
    setError(userPhone)
  } else {
    setSuccess(userPhone)
  }

  if(userMessageVal == '') {
    setError(userMessage)
  } else {
    setSuccess(userMessage)
  }
    
    
    
    let userNameSuc =  userName.nextElementSibling.classList,
          userEmailSuc =  userEmail.nextElementSibling.classList,
          userPhoneSuc =  userPhone.nextElementSibling.classList;
    
    if(userNameSuc == 'success' && userEmailSuc == 'success' && userPhoneSuc == 'success') {
      document.querySelector('.popUp-thanks').classList.remove('d-none')
      }
    })
})


function setSuccess(input) {
  input.style.borderColor = '#ffdd2d'
  let small = input.nextElementSibling;
  small.classList.add('success');
  small.classList.remove('error');
}
  
  function setError(input) {
  input.style.borderColor = '#F15B67'
  let small = input.nextElementSibling;
  small.classList.add('error');
  small.classList.remove('success');
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }


  $(".steps_delivery .step").click(function(){
    $('.steps_delivery .step').removeClass('active');
    $(this).addClass('active');
    if ($('.steps_delivery .step:nth-child(1)').hasClass("active")) {
      $('.steps_delivery .steps-box').removeClass('twoBox threeBox fourBox fiveBox sixBox sevenBox');
      $(this).parent().addClass('oneBox');
    } 
    else if ($('.steps_delivery .step:nth-child(2)').hasClass("active")) {
      $('.steps_delivery .steps-box').removeClass('oneBox threeBox fourBox fiveBox sixBox sevenBox');
      $(this).parent().addClass('twoBox');
    }
    else if ($('.steps_delivery .step:nth-child(3)').hasClass("active")) {
      $('.steps_delivery .steps-box').removeClass('oneBox twoBox fourBox fiveBox sixBox sevenBox');
      $(this).parent().addClass('threeBox');
    }
    else if ($('.steps_delivery .step:nth-child(4)').hasClass("active")) {
      $('.steps_delivery .steps-box').removeClass('oneBox twoBox threeBox fiveBox sixBox sevenBox');
      $(this).parent().addClass('fourBox');
    }
    else if ($('.steps_delivery .step:nth-child(5)').hasClass("active")) {
      $('.steps_delivery .steps-box').removeClass('oneBox twoBox threeBox fourBox sixBox sevenBox');
      $(this).parent().addClass('fiveBox');
    }
    else if ($('.steps_delivery .step:nth-child(6)').hasClass("active")) {
      $('.steps_delivery .steps-box').removeClass('oneBox twoBox threeBox fourBox fiveBox sevenBox');
      $(this).parent().addClass('sixBox');
    }
    else if ($('.steps_delivery .step:nth-child(7)').hasClass("active")) {
      $('.steps_delivery .steps-box').removeClass('oneBox twoBox threeBox fourBox fiveBox sixBox');
      $(this).parent().addClass('sevenBox');
    }
  });


  $(".steps_ved .step").click(function(){
    $('.steps_ved .step').removeClass('active');
    $(this).addClass('active');
    if ($('.steps_ved .step:nth-child(1)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('twoBox threeBox fourBox fiveBox sixBox seven_box eight_box  nine_box');
      $(this).parent().addClass('oneBox');
    } 
    else if ($('.steps_ved .step:nth-child(2)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox threeBox fourBox fiveBox sixBox seven_box eight_box  nine_box');
      $(this).parent().addClass('twoBox');
    }
    else if ($('.steps_ved .step:nth-child(3)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox twoBox fourBox fiveBox sixBox seven_box eight_box  nine_box');
      $(this).parent().addClass('threeBox');
    }
    else if ($('.steps_ved .step:nth-child(4)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox twoBox threeBox fiveBox sixBox seven_box eight_box  nine_box');
      $(this).parent().addClass('fourBox');
    }
    else if ($('.steps_ved .step:nth-child(5)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox twoBox threeBox fourBox sixBox seven_box eight_box  nine_box');
      $(this).parent().addClass('fiveBox');
    }
    else if ($('.steps_ved .step:nth-child(6)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox twoBox threeBox fourBox fiveBox seven_box eight_box  nine_box');
      $(this).parent().addClass('sixBox');
    }
    else if ($('.steps_ved .step:nth-child(7)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox twoBox threeBox fourBox fiveBox sixBox eight_box  nine_box');
      $(this).parent().addClass('seven_box');
    }
    else if ($('.steps_ved .step:nth-child(8)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox twoBox threeBox fourBox fiveBox sixBox seven_box  nine_box');
      $(this).parent().addClass('eight_box');
    }
    else if ($('.steps_ved .step:nth-child(9)').hasClass("active")) {
      $('.steps_ved .steps-box').removeClass('oneBox twoBox threeBox fourBox fiveBox sixBox seven_box  eight_box');
      $(this).parent().addClass('nine_box');
    }
  });


  $(".faq-head").click(function(){
    $(this).parent().toggleClass('showFaq')
  });

  let count = 0;
  $(".showBtn").click(function(){
    if(count == 0) {
      $(this).prev().addClass('showInfo')
      $(this).addClass('clickedBtn')
      return count = 1;
    } else {
      $(this).prev().removeClass('showInfo')
      $(this).removeClass('clickedBtn')
      return count = 0;
    }
  });


  $(".recommendation img").click(function(){
    $(".popUp-zoom").removeClass('d-none')
    $(".popUp-zoom .zoom-img").attr('src', $(this).attr('src'))
  });


//   $(".order-btn").click(function(){
//     $('.popUp-callBack').removeClass('d-none');
//     $('body').addClass('bodyStopScroll');
//  });

//  $(".get-catalog").click(function(){
//   $('.popUp-catalog').removeClass('d-none');
//   $('body').addClass('bodyStopScroll');
// });


//  $(document).ready(function() {
//   $('.tab-item').hide();
//   $('.tab-item:first-child').show();
//   $('.tab-btn').click(function() {
//     let pageInfo = $(this).attr('data-tab');
//     $('.tab-item').hide();
//     $('.' + pageInfo).show();
//   })
// });
