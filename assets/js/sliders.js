const block2 = new Swiper(".swiper-block2", {
	slidesPerView: "auto",
	spaceBetween: 30,
	loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.block2-next',
    prevEl: '.block2-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 30,
    },
}
});

const block3 = new Swiper(".swiper-block3", {
	slidesPerView: "auto",
	loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.block3-next',
    prevEl: '.block3-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 30,
    },
}
});

const performers = new Swiper(".swiper-performers", {
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      loop: true,
      centeredSlides: true,
      grid: {
          rows: 1,
          fill: 'row'
        },
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 16,
      loop: true,
      centeredSlides: true,
      grid: {
          rows: 1,
          fill: 'row'
        },
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
          rows: 5,
          fill: 'row'
        },
    },
}
});

const result = new Swiper(".swiper-result", {
	slidesPerView: "auto",
	spaceBetween: 30,
	loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: '.result-next',
    prevEl: '.result-prev',
  },
});

const chatList = new Swiper(".swiper-chatList", {
	slidesPerView: "auto",
	spaceBetween: 10,
	loop: false,
});


const reels = new Swiper(".swiper-reels", {
	slidesPerView: "auto",
	spaceBetween: 30,
	loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.reels-next',
    prevEl: '.reels-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 30,
    },
}
});

const uploaded = new Swiper(".swiper-uploaded", {
	slidesPerView: "auto",
	spaceBetween: 20,
	loop: false,
  navigation: {
    nextEl: '.uploaded-next',
    prevEl: '.uploaded-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 20,
    },
}
});

const paid = new Swiper(".swiper-paid", {
	slidesPerView: "auto",
	spaceBetween: 20,
	loop: false,
  navigation: {
    nextEl: '.paid-next',
    prevEl: '.paid-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 20,
    },
}
});

const allWorks = new Swiper(".swiper-allWorks", {
	slidesPerView: "auto",
	spaceBetween: 20,
	loop: false,
  navigation: {
    nextEl: '.allWorks-next',
    prevEl: '.allWorks-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 20,
    },
}
});



const uploaded_v = new Swiper(".swiper-uploaded-v", {
	slidesPerView: "auto",
	spaceBetween: 20,
	loop: false,
  navigation: {
    nextEl: '.uploaded-v-next',
    prevEl: '.uploaded-v-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 20,
    },
}
});

const paid_v = new Swiper(".swiper-paid-v", {
	slidesPerView: "auto",
	spaceBetween: 20,
	loop: false,
  navigation: {
    nextEl: '.paid-v-next',
    prevEl: '.paid-v-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 20,
    },
}
});

const allWorks_v = new Swiper(".swiper-allWorks-v", {
	slidesPerView: "auto",
	spaceBetween: 20,
	loop: false,
  navigation: {
    nextEl: '.allWorks-v-next',
    prevEl: '.allWorks-v-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    992: {
      spaceBetween: 20,
    },
}
});

