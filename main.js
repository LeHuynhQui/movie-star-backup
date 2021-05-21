$(document).ready(function(){
    $('.film-slider').slick({
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots:false,
      infinite: false, 
      responsive: [
        {
          breakpoint: 1060,
          settings: {
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 992,
          settings: {
            infinite: false,
            arrows: true,
            autoplay: false,
          }
        },
        {
          breakpoint: 820,
          settings: {
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        }, 
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.soonSlider').slick({
      autoplay: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            autoplay: false,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        }
      ]
    });
  });

 

  $(document).ready(function(){
    $('.news-carousel').slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
      ]
    });
  });
  






const header = document.querySelector('header')
const navTop = document.querySelector('.nav-top')
console.log(header)

window.addEventListener('scroll', e => {
    if (window.scrollY > 550 ) {
        header.classList.add('position-fixed', 'top-0', 'transition-500ms', 'bg-black', 'z-index-10', 'pb-3')
        navTop.classList.add('unactive')
    } else {
        header.classList.remove('position-fixed', 'top-0', 'transition-500ms', 'bg-black', 'z-index-10', 'pb-3')
        navTop.classList.remove('unactive')
    }

})


const navLinkTel = document.querySelector('.nav-link-tel')
const mainNav = document.querySelector('.main-nav')
const navLinkSearch = document.querySelector('.nav-link-search')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')

function setClose () {
    navLinkTel.classList.toggle('unactive')
    navLinkSearch.classList.toggle('unactive')
    line1.classList.toggle('close')
    line2.classList.toggle('close')
    line3.classList.toggle('close')
    mainNav.classList.toggle('active')
    mainNav.classList.toggle('block-important')
}




const playTrailerCarousel = document.querySelector('#carousel .playTrailer')
const blurBgCarousel = document.querySelector('.blur-bg ')

function setPlayTrailerCarousel (play) {
   if (play) {
       playTrailerCarousel.classList.add('activePlay')
       blurBgCarousel.classList.add('blur-bg-active')
   } else {
       playTrailerCarousel.classList.remove('activePlay')
       blurBgCarousel.classList.remove('blur-bg-active')
   }
}

const playTrailerNewCarousel = document.querySelector('#newsCarousel .playTrailer')

function setPlayTrailerNewCarousel (play) {
    if (play) {
        playTrailerNewCarousel.classList.add('activePlay')
        blurBgCarousel.classList.add('blur-bg-active')
    } else {
        playTrailerNewCarousel.classList.remove('activePlay')
        blurBgCarousel.classList.remove('blur-bg-active')
    }
}


 const playTrailerNews = document.querySelector('#mainNews .playTrailer')

function setPlayTrailerNews (play) {
    if (play) {
        playTrailerNews.classList.add('activePlay')
        blurBgCarousel.classList.add('blur-bg-active')
    } else {
        playTrailerNews.classList.remove('activePlay')
        blurBgCarousel.classList.remove('blur-bg-active')
    }
}