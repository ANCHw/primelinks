$(document).ready(function () {
  //плавный скролл
  $('a[href*="#"]').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });

  //бургер
  $('.burger').click( function () {
    $('.sidemenu').toggleClass('active');
    $('body').toggleClass('fixed');
  });

  //главный слайдер
  $('.top__main-slider').owlCarousel({
    loop:false,
    nav:true,
    items:1
  });

  //слайдер отзывов
  $('.reviews__slider').owlCarousel({
    loop:false,
    nav:true,
    items:3,
    margin: 20,
  });

  //слайдер блога
  $('.blog__slider').owlCarousel({
    loop:false,
    nav:true,
    items:3,
    margin: 20,
  });

  //слайдер portfolio
  $('.portfolio__slider').owlCarousel({
    loop:true,
    center:true,
    nav:true,
    items:3,
    margin: 20,
  });

  //слайдер gallery
  $('.gallery__slider').owlCarousel({
    loop:false,
    nav:true,
    items:4,
    margin: 20,
  });

  //запуск видео
  $('.btn-play').click( function () {
    let video = $(this).siblings('video').get(0);
    if ( video.paused ) {
      video.play();
      $(".btn-play").addClass('active');
    } else {
      video.pause();
      $(".btn-play").removeClass('active');
    }
  });

  //модалка
  $('.btn-modal').click( function () {
    $($(this).data('target')).fadeIn();
  });

  $('.modal-close').click( function () {
    $(this).parents('.modal-fade').fadeOut();
  });

  $(document).mouseup(function (e){
    let div = $(".modal");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      div.parent().fadeOut();
    }
  });
});
