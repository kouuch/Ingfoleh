// swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function toggleHeart(element) {
    // Menambah atau menghapus class 'liked' saat icon diklik
    if (element.classList.contains('bx-heart')) {
      element.classList.remove('bx-heart');
      element.classList.add('bxs-heart');
    } else {
      element.classList.remove('bxs-heart');
      element.classList.add('bx-heart');
    }
  }