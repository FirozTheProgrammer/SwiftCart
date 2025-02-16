import Social from "@/components/shared/socials/Social";
import Link from "next/link";
import NavbarMobile2 from "./NavbarMobile2";

const MobileMenu2 = () => {
  return (
    <div
      className="offcanvas offcanvas-end headerarea__offcavas__wrapper"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRight"
    >
      <div className="offcanvas-header headerarea__offcavas__close__button">
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body headerarea__offcavas__body">
        <form action="#" className="headerarea__offcavas__form">
          <div className="form-group">
            <input type="text" name="search-field" placeholder="Search..." />
            <button className="side-nav-search-btn">
              <i className="icofont-search"></i>
            </button>
          </div>
        </form>
        <div className="row ">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <NavbarMobile2 />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="headerarea__offcavas__contact">
              <div className="headerarea__offcavas__contact__inner">
                <address className="headerarea__offcavas__address">
                  <span className="title">Contact Information</span>
                  <p>
                    Times Square, Za #999-859 <br /> Nid Road, Atlanta, USA
                  </p>
                </address>
                <address className="headerarea__offcavas__address">
                  <span className="title">
                    {"We're"} Available 24/7. Call Now.
                  </span>
                  <Link className="tel" href="tel:8884562790">
                    <i className="icofont-phone"></i>(888) 456-2790
                  </Link>
                  <Link className="tel" href="tel:12125553333">
                    <i className="icofont-fax"></i>(121) 255-53333
                  </Link>
                </address>
              </div>
              <div className="headerarea__offcavas__contact__inner">
                <h5 className="title">Find us here</h5>
                <div className="headerarea__icon headerarea__offcavas__icon">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu2;
