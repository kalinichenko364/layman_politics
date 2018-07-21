import 'slick-carousel';


// burger

$('.js-open-menu').on('click', function(e) {
  $('.navs').toggleClass('active');
  $(this).toggleClass('active');
});


// slick-carousel

$('.cards__list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  ,
  prevArrow: '<button class="btn-slick btn-slick--prev" type="button"><img src="img/arrow-prev.svg"></button>'
  ,
  nextArrow: '<button class="btn-slick btn-slick--next" type="button"><img src="img/arrow-next.svg"></button>'
});

// let slickInit = '.slick-initialized';
// function adaptiveSliders() {
//   if($(document).width() <= 768) {
//     $('.workers').not(slickInit).slick({
//       slidesToShow: 1,
//       prevArrow: '<button class="btn-slick" type="button"><img src="img/arrow-left.svg"></button>',
//       nextArrow: '<button class="btn-slick" type="button"><img src="img/arrow-right.svg"></button>'
//     });
//   } else {
//     if($('.workers' + slickInit).length >= 1) {
//       $('.workers').slick('unslick');
//     }
//   }
// }
