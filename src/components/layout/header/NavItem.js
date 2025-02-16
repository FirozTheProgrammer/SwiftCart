import Link from "next/link";

const NavItem = ({ item }) => {
  const { name, icon, path, dropdown, position } = item;
  return (
    <li
      className={
        dropdown && position
          ? "headerarea__common__dropdown headerarea__mega__menu position-static"
          : dropdown
          ? "headerarea__common__dropdown headerarea__mega__menu"
          : ""
      }
    >
      <Link className="headerarea__has__dropdown" href={path}>
        {name}
        {icon ? <i className="icofont-long-arrow-down"></i> : ""}
      </Link>
      {dropdown ? dropdown : ""}
    </li>
  );
};

export default NavItem;
