$(document).ready(function(){
  $('#slick').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    rows:2,
    slidesPerRow: 4,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          rows:2,
          slidesPerRow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          rows:2,
          slidesPerRow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows:1,
          slidesPerRow: 1
        }
      }
    ]
  });
});
