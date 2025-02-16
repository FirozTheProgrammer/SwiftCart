const controllSwiper = () => {
  const swipers = document.querySelectorAll(".swiper");
  {
    swipers.forEach((swiper, idx) => {
      const controllerParent = swiper.querySelector(".slider__controls__wrap");

      if (controllerParent) {
        const swiperPrevButtons = swiper.querySelectorAll(
          ".swiper-button-prev"
        );
        const swiperNextButtons = swiper.querySelectorAll(
          ".swiper-button-next"
        );
        const swiperPagination = swiper.querySelector(".swiper-pagination");
        // swiperNextButtons[0].classList.add(swiperNextButtons[1].className);
        // swiperPrevButtons[0].classList.add(swiperPrevButtons[1].className);
        swiperPrevButtons[1].className
          .split(" ")
          .forEach((cls) => swiperPrevButtons[0].classList.add(cls));
        swiperNextButtons[1].className
          .split(" ")
          .forEach((cls) => swiperNextButtons[0].classList.add(cls));
        swiperNextButtons[0].innerHTML = swiperNextButtons[1].innerHTML;
        swiperPrevButtons[0].innerHTML = swiperPrevButtons[1].innerHTML;
        swiperNextButtons[1].remove();
        swiperPrevButtons[1].remove();
        controllerParent.append(swiperNextButtons[0]);
        controllerParent.append(swiperPrevButtons[0]);
        if (swiperPagination) {
          controllerParent.append(swiperPagination);
        }
      }
    });
  }
};

export default controllSwiper;
