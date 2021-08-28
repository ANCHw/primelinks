$(document).ready(function () {
  $('a[href*="#"]').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
  
  $('.burger').click( function () {
    $('.sidemenu').toggleClass('active');
    $('body').toggleClass('fixed');
  });
  

  


});
