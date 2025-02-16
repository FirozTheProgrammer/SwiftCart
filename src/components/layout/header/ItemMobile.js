import Link from "next/link";
import React from "react";
import DropdownMobile from "./DropdownMobile";

const ItemMobile = ({ item }) => {
  const { name, path, dropdown, dropdownItems, toggler } = item;

  return (
    <li className="offcanvas__menu_li">
      <Link className="offcanvas__menu_item" href={path}>
        {name}
      </Link>
      {dropdown ? <DropdownMobile items={dropdownItems} /> : ""}
    </li>
  );
};

export default ItemMobile;
