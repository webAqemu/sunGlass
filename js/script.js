// arrows for slider
const leftArrow = `<button class="slider__arrow slider__arrow--left"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.183317 3.54332C0.183505 3.54313 0.183661 3.5429 0.18388 3.54271L3.44958 0.187869C3.69423 -0.0634537 4.08994 -0.0625185 4.33347 0.190062C4.57697 0.442611 4.57603 0.851095 4.33138 1.10245L2.13879 3.35484H15.3748C15.7199 3.35484 15.9998 3.64368 15.9998 4C15.9998 4.35632 15.7199 4.64516 15.3748 4.64516H2.13882L4.33135 6.89755C4.576 7.1489 4.57694 7.55739 4.33344 7.80994C4.08991 8.06255 3.69417 8.06342 3.44955 7.81213L0.183848 4.45729C0.183661 4.4571 0.183504 4.45687 0.183286 4.45668C-0.061491 4.20448 -0.0607109 3.79468 0.183317 3.54332Z" fill="#FF4E4E"/></svg></button>`;
const rightArrow = `<button class="slider__arrow slider__arrow--right"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8164 3.54332C15.8163 3.54313 15.8161 3.5429 15.8159 3.54271L12.5502 0.187869C12.3055 -0.0634537 11.9098 -0.0625185 11.6663 0.190062C11.4228 0.442611 11.4237 0.851095 11.6684 1.10245L13.861 3.35484H0.62499C0.279808 3.35484 0 3.64368 0 4C0 4.35632 0.279808 4.64516 0.62499 4.64516H13.8609L11.6684 6.89755C11.4238 7.1489 11.4228 7.55739 11.6663 7.80994C11.9098 8.06255 12.3056 8.06342 12.5502 7.81213L15.8159 4.45729C15.8161 4.4571 15.8163 4.45687 15.8165 4.45668C16.0612 4.20448 16.0605 3.79468 15.8164 3.54332Z" fill="#FF4E4E"/></svg></button>`;

// promo slider
$('.promo').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slider__dots",
  prevArrow: leftArrow,
  nextArrow: rightArrow,
});

// categories slider
$('.categories').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
});

//toggle class for categories
const categoriesList = document.querySelector(".categories");

if (categoriesList) {
  categoriesList.addEventListener("click", function(e) {
    if(e.target.classList.contains("categories__item")) {
      document.querySelector(".categories__item.active").classList.remove("active")
      e.target.classList.add("active")
    }
  })

  // play and stop the video after tap
  const playBtn = document.querySelector(".about__play");
  const vid = document.querySelector(".about__video");

  if (playBtn.addEventListener) {
    playBtn.addEventListener("click", play, false);
  } else if (playBtn.attachEvent) {
    playBtn.attachEvent("onclick", play);
  }

  function play() {
    if (vid.paused) {
      vid.play();
      playBtn.classList.toggle("active");
    } else {
      vid.pause();
      playBtn.classList.toggle("active");
    }
  }
}

// popular slider 
$('.popular__inner').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slider__dots",
  prevArrow: leftArrow,
  nextArrow: rightArrow,
});

// sales slider 
$('.sales__inner').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slider__dots",
  prevArrow: leftArrow,
  nextArrow: rightArrow,
});

// viewed slider 
$('.viewed__inner').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slider__dots",
  initialSlide: 1,
  prevArrow: leftArrow,
  nextArrow: rightArrow,
});

// reviews slider 
$('.reviews__inner').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slider__dots",
  initialSlide: 1,
  adaptiveHeight: true,
  prevArrow: leftArrow,
  nextArrow: rightArrow,
});

// categories slider
$('.item__slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slider__dots",
  adaptiveHeight: true,
  prevArrow: leftArrow,
  nextArrow: rightArrow,
});

const cart = document.querySelector(".cart");

if (cart) {
  cart.addEventListener("click", function(e) {

    // destroying the cart
    if (e.target.classList.contains("card__close")) {
      e.target.closest(".card").style.opacity = 0;
      setTimeout( _ => {
        e.target.closest(".cart__item").remove()
      }, 1000)
    }

    // decrease amount
    if(e.target.classList.contains("card__less") && e.target.closest(".card__amount").querySelector(".card__num").innerHTML != 1) {
      e.target.closest(".card__amount").querySelector(".card__num").innerHTML--;
      if(e.target.closest(".card__amount").querySelector(".card__num").innerHTML == 1) {
        e.target.classList.add("inactive")
      }
    }

    // increase amount
    if(e.target.classList.contains("card__more")) {
      e.target.closest(".card__amount").querySelector(".card__num").innerHTML++;
      e.target.closest(".card__amount").querySelector(".card__less").classList.remove("inactive")
    }

  })
}

const order = document.querySelector(".order")

if(order) {
  order.addEventListener("click", function(e) {
    // simple mask for phone input
    if(e.target.classList.contains("order__input--phone") && e.target.value == "") {
      e.target.value = "+7 "
    }
  })
}