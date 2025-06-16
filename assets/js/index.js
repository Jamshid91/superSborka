const recommendation = new Swiper(".swiper-recommendation", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
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
  pagination: false,
  navigation: false,

  autoplay: {
    delay: 0
  },
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
