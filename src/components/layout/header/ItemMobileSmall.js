import Link from "next/link";
import React from "react";
import DropdownMobile from "./DropdownMobile";

const ItemMobileSmall = ({ item }) => {
  const { name, path, items, toggler, dropdown } = item;

  return (
    <li className="offcanvas__sub_menu_li">
      <Link href={path} className="offcanvas__sub_menu_item">
        {name}
      </Link>
      {dropdown ? <DropdownMobile items={items} /> : ""}
    </li>
  );
};

export default ItemMobileSmall;
