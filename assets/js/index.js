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





// const menuBtn = document.querySelector('.menu-btn'),
//       menu = document.querySelector('.menu');

      

// $(".menu-btn").click(function(){
//   $(this).toggleClass('clickedMenu');
//   $('.menu').toggleClass('d-none');
//   $('body').toggleClass('bodyStopScroll');
// });

// $(".menu-nav li").click(function(){
//   $('.menu-btn').removeClass('clickedMenu');
//   $('.menu').addClass('d-none');
//   $('body').removeClass('bodyStopScroll');
// });

// $(".cookie-btn").click(function(){
//   $(".cookie").addClass('hideCookie');
// });

// $("img.drawing").click(function(){
//   $(this).parent().toggleClass('zoomDrawing');
// });

// const submitBtn = document.querySelectorAll('.submit-btn');

// submitBtn.forEach(submit => {
//   submit.addEventListener('click', () => {
//     let userName = submit.parentElement.children[0].children[0];
//     let userPhone = submit.parentElement.children[1].children[0];
//     let userEmail = submit.parentElement.children[2].children[0];
    
//     const userNameVal = userName.value.trim(),
//       userEmailVal = userEmail.value.trim(),
//       userPhoneVal = userPhone.value.trim();

//   if(userNameVal == '' || userName.value.length < 2) {
//     setError(userName)
//   } else {
//     setSuccess(userName)
//   }

//   if(userEmailVal === '') {
//     setError(userEmail)
//   }
//   else if(!isEmail(userEmailVal)) {
//     setError(userEmail)
//   }
//    else {
//     setSuccess(userEmail)
//   }

//   if(userPhoneVal == '' || userPhone.value.substr(-1) === '_') {
//     setError(userPhone)
//   } else {
//     setSuccess(userPhone)
//   }
    
    
    
//     let userNameSuc =  userName.nextElementSibling.classList,
//           userEmailSuc =  userEmail.nextElementSibling.classList,
//           userPhoneSuc =  userPhone.nextElementSibling.classList;
    
//     if(userNameSuc == 'success' && userEmailSuc == 'success' && userPhoneSuc == 'success') {
//       // $(".popUp").addClass('d-none');
//       // document.querySelector('.popUp-thanks').classList.remove('d-none')
//       window.location = 'thanks.html';
//       }
//     })
// })







// function setSuccess(input) {
//   input.style.borderColor = '#CCC6B7'
//   let small = input.nextElementSibling;
//   small.classList.add('success');
//   small.classList.remove('error');
// }
  
//   function setError(input) {
//   input.style.borderColor = '#F15B67'
//   let small = input.nextElementSibling;
//   small.classList.add('error');
//   small.classList.remove('success');
//   }

//   function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//   }

//   $(".user-phone").inputmask({"mask": "+7(999) 999-99-99"});

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
