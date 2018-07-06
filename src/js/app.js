import sayHello from './lib/sayHello.js';

sayHello();

  
$('.js-open-menu').on('click', function(e) {
  $('.main-nav').toggleClass('active');
});
