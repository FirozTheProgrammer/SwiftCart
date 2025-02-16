import Link from "next/link";
import React from "react";

const Download = () => {
  return (
    <div
      className="sidebar__widget"
      data-aos="fade-up"
      data-aos-duration="2100"
    >
      <div className="sidebar__title">
        <h5>Download Brochure:</h5>
      </div>
      <div className="sidebar__button">
        <Link
          className="default__button sidebar__button__1"
          target="_blank"
          href="/download.pdf"
        >
          Download PDF<i className="icofont-file-pdf"></i>
        </Link>
        <Link
          className="default__button btn__black"
          target="_blank"
          href="/download.docx"
        >
          Download DOC<i className="icofont-file-document"></i>
        </Link>
      </div>
    </div>
  );
};

export default Download;
