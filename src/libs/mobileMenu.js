const mobileMenu = () => {
  /* Slide Up */
  var slideUp = (target, time) => {
    const duration = time ? time : 500;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    window.setTimeout(() => {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  // slide down
  var slideDown = (target, time) => {
    const duration = time ? time : 500;
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    const height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  /* Offcanvas Mobile Menu Function */
  const offcanvasHeader = function () {
    const offcanvasOpen = document.querySelector(
        ".offcanvas__header--menu__open--btn"
      ),
      offcanvasClose = document.querySelector(".offcanvas__close--btn"),
      offcanvasHeader = document.querySelector(".offcanvas__header"),
      offcanvasMenu = document.querySelector(".offcanvas__menu"),
      body = document.querySelector("body");

    /* Offcanvas SubMenu Toggle */
    if (offcanvasMenu) {
      offcanvasMenu
        .querySelectorAll(".offcanvas__sub_menu")
        .forEach(function (ul) {
          const subMenuToggle = document.createElement("button");
          subMenuToggle.classList.add("offcanvas__sub_menu_toggle");
          ul.parentNode.appendChild(subMenuToggle);
        });
    }
    /* Open/Close Menu On Click Toggle Button */
    if (offcanvasOpen) {
      offcanvasOpen.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.target.dataset.offcanvas != undefined) {
          offcanvasHeader.classList.add("open");
          body.classList.add("mobile_menu_open");
        }
      });
    }
    if (offcanvasClose) {
      offcanvasClose.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.dataset.offcanvas != undefined) {
          offcanvasHeader.classList.remove("open");
          body.classList.remove("mobile_menu_open");
        }
      });
    }

    /* Mobile submenu slideToggle Activation */
    let mobileMenuWrapper = document.querySelector(".offcanvas__menu_ul");
    if (mobileMenuWrapper) {
      mobileMenuWrapper.addEventListener("click", function (e) {
        let targetElement = e.target;
        if (targetElement.classList.contains("offcanvas__sub_menu_toggle")) {
          const parent = targetElement.parentElement;
          if (parent.classList.contains("active")) {
            targetElement.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            targetElement.classList.add("active");
            parent.classList.add("active");
            slideDown(targetElement.previousElementSibling);
            // getSiblings(parent).forEach(function (item) {
            //   item.classList.remove("active");
            //   item
            //     .querySelectorAll(".offcanvas__sub_menu")
            //     .forEach(function (subMenu) {
            //       subMenu.parentElement.classList.remove("active");
            //       subMenu.nextElementSibling.classList.remove("active");
            //       slideUp(subMenu);
            //     });
            // });
          }
        }
      });
    }

    if (offcanvasHeader) {
      document.addEventListener("click", function (event) {
        if (
          !event.target.closest(".offcanvas__header--menu__open--btn") &&
          !event.target.classList.contains(
            ".offcanvas__header--menu__open--btn".replace(/\./, "")
          )
        ) {
          if (
            !event.target.closest(".offcanvas__header") &&
            !event.target.classList.contains(
              ".offcanvas__header".replace(/\./, "")
            )
          ) {
            offcanvasHeader.classList.remove("open");
            body.classList.remove("mobile_menu_open");
          }
        }
      });
    }

    /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
    if (offcanvasHeader) {
      window.addEventListener("resize", function () {
        if (window.outerWidth >= 992) {
          offcanvasHeader.classList.remove("open");
          body.classList.remove("mobile_menu_open");
        }
      });
    }
  };
  offcanvasHeader();
};

export default mobileMenu;
