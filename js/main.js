$(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height >= 200) {
      $('.header__top').addClass('header__top_fix');
      $('.headline').addClass('fix');
    } else {
      $('.header__top').removeClass('header__top_fix');
      $('.headline').removeClass('fix');
    }
  });

  $('.menu-btn').on('click', function () {
    $('.navigation').toggleClass('navigation_active');
  });

  $('.menu-btn').on('click', function () {
    $('.menu-btn__string').toggleClass('menu-btn__string_active');
  });

  $('.menu-btn').on('click', function () {
    $('.navigation').toggleClass('.navigation_active');
  });

  $('.feedback-slider').slick({
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 600,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {},
      },
    ],
  });
});
