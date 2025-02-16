import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";
import HeaderRight from "./HeaderRight";
import { useHeaderContex } from "@/providers/HeaderContex";

const HeaderLarge = () => {
  const { style, headerType } = useHeaderContex();
  return (
    <div
      className={`${
        headerType === 3 ? "container-fluid  full__width__padding" : "container"
      }  ${style === 4 ? "" : "desktop__menu__wrapper"} `}
    >
      <div
        className={`headerarea__main__wrapper position-relative ${
          !style ? "" : `headerarea__main__wrapper--${style}`
        } `}
      >
        <div className="headerarea__component__wrap">
          {/* logo area */}
          <LogoHeader />

          {/* navbar */}
          {style === 4 ? "" : <Navbar />}

          {/* header right */}
          <HeaderRight />
        </div>
      </div>
    </div>
  );
};

export default HeaderLarge;
