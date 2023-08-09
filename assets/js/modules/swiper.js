export default function initSwiper() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursos: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
