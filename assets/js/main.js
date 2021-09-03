$(document).ready(function () {
  //плавный скролл
  $('a[href*="#"]').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });

  //фиксация шапки
  let header = $('header'),
      body = $('body');
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
      header.addClass('header_fixed');
      body.css('padding-top', '110px');
    } else {
      header.removeClass('header_fixed');
      body.css('padding-top', '0px');
    }
  });

  //mobile menu
  $('.burger').click( function () {
    $('.mobile-menu').addClass('active');
    $('body').css('overflow','hidden');
  });

  $('.close').click( function () {
    $('.mobile-menu').removeClass('active');
    $('body').css('overflow','auto');
  });

  //загрузка слайдера
  $('.top__main-slider').on('initialized.owl.carousel', function () {
    $(this).removeClass('hidden');
    $(this).parent().removeClass('height');
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
    lazyLoad:true,
    nav:true,
    items:3,
    margin: 20,
    responsive : {
      0 : {
        items:1,
      },
      768 : {
        items:2,
      },
      992 : {
        items:3,
      }
    }
  });

  //слайдер блога
  $('.blog__slider').owlCarousel({
    loop:false,
    lazyLoad:true,
    nav:true,
    margin: 20,
    responsive : {
      0 : {
        items:1,
      },
      768 : {
        items:2,
      },
      992 : {
        items:3,
      }
    }
  });

  //слайдер portfolio
  $('.portfolio__slider').owlCarousel({
    loop:true,
    lazyLoad:true,
    center:true,
    nav:true,
    margin: 20,
    responsive : {
      0 : {
        items:1,
      },
      768 : {
        items:2,
      },
      992 : {
        items:3,
      }
    }
  });

  //слайдер gallery
  $('.gallery__slider').owlCarousel({
    loop:false,
    lazyLoad:true,
    nav:true,
    margin: 20,
    responsive : {
      0 : {
        items:1,
      },
      768 : {
        items:2,
      },
      992 : {
        items:3,
      },
      1200 : {
        items:4,
      }
    }
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

  //mask on phone
  $(".phone-input").mask("+7(999) 999-9999");

});
