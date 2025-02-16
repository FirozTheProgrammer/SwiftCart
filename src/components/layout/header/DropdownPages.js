import Image from "next/image";
import React from "react";
import DropdownContent from "./DropdownContent";
import Link from "next/link";

const DropdownPages = ({ dropdownContents, dropdownThumbs }) => {
  return (
    <div className="headerarea__submenu headerarea__mega__menu__wrapper">
      <div className="row">
        {dropdownContents?.map((dropdownContent, idx) => (
          <DropdownContent key={idx} dropdownContent={dropdownContent} />
        ))}
        <div className="col-3 headerarea__mega__menu__single__wrap">
          <div className="headerarea__mega__menu__img">
            <Link href={dropdownThumbs.path}>
              <Image
                placeholder="blur"
                src={dropdownThumbs.img}
                alt="Mega Menu"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownPages;
