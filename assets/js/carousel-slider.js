// Home Page Hero Section Carousel Start
var owl = $(".hero-section-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  nav: true,
  navText: [
    "<i class='bxr bxs-caret-left'></i>",
    "<i class='bxr bxs-caret-right'></i>",
  ],
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// Home Page Hero Section Carousel End

// Testimonials Carousel Start
$(".testimonials-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navText: [
    "<i class='bxr bxs-caret-left'></i>",
    "<i class='bxr bxs-caret-right'></i>",
  ],
  dots: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
// Testimonials Carousel End
