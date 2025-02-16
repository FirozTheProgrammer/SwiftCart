import Link from "next/link";
import React from "react";
import ItemMobileSmall from "./ItemMobileSmall";

const DropdownMobile = ({ items }) => {
  return (
    <ul className="offcanvas__sub_menu">
      {items?.map((item, idx) => (
        <ItemMobileSmall key={idx} item={item} />
      ))}
    </ul>
  );
};

export default DropdownMobile;
