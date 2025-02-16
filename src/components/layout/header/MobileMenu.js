"use effect";

import LogoMobile from "./LogoMobile";
import NavbarMobile from "./NavbarMobile";

const MobileMenu = () => {
  return (
    <div className="offcanvas__header">
      <div className="offcanvas__inner">
        <LogoMobile />
        <NavbarMobile />
      </div>
    </div>
  );
};

export default MobileMenu;
