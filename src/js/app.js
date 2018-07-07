import sayHello from './lib/sayHello.js';

sayHello();

  
$('.js-open-menu').on('click', function(e) {
  $('.navs').toggleClass('active');
  $(this).toggleClass('active');
});
