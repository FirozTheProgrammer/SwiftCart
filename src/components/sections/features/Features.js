import Image from "next/image";
import Link from "next/link";
import React from "react";
import processImag1 from "@/assets/img/process/process__1.png";
import processIcon1 from "@/assets/img/process/process__1__icon.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
const Features = () => {
  return (
    <div className="working" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="working__support ws__left__side">
              <div className="working__heading">
                <h5>24/7 CLINE SUPPORT</h5>
              </div>
              <div className="working__paragraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="working__button">
                <ButtonPrimary text="OUR SERVICE" path="/services" />
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="working__support working__support--2">
              <div className="working__heading">
                <h5>100% CLIENT SATISFACTION</h5>
              </div>
              <div className="working__paragraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="working__button">
                <ButtonPrimary
                  text="CONTACT WITH US"
                  path="/contact"
                  button={"white"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="working__support__img">
          <div className="bastun__brand__badge">
            <div className="bastun__brand__badge__inner position-relative">
              <Link href="/">
                <Image
                  className="bbb__animate"
                  src={processImag1}
                  alt="Support badge"
                />
                <Image
                  className="bbb__icon"
                  src={processIcon1}
                  alt="Support icon badge"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
