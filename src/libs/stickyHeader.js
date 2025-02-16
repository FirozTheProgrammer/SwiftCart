const stickyHeader = () => {
  //  Sticky header
  function TopOffset(el) {
    let rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop };
  }
  function ScrollSticky() {
    const headerStickyWrapper = document.querySelector("header");
    const headerStickyTarget = document.querySelector(".header__sticky");

    if (headerStickyTarget) {
      window.addEventListener("scroll", function () {
        let StickyTargetElement = TopOffset(headerStickyWrapper);
        let TargetElementTopOffset = StickyTargetElement.top;

        if (window.scrollY > TargetElementTopOffset) {
          headerStickyTarget.classList.add("sticky");
        } else {
          headerStickyTarget.classList.remove("sticky");
        }
      });
    }
  }
  ScrollSticky();
};

export default stickyHeader;
