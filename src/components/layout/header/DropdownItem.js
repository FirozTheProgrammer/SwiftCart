import Link from "next/link";

const DropdownItem = ({ item }) => {
  const { name, label, path, nestedDropdownItems, icon } = item;
  return (
    <li>
      <Link href={path}>
        {name}
        {label ? (
          <span className="headerarea__menu__special__label">{label}</span>
        ) : (
          ""
        )}
        {icon ? <i className="icofont-long-arrow-right"></i> : ""}
      </Link>

      {nestedDropdownItems ? (
        <ul className="headerarea__submenu--five">
          {nestedDropdownItems?.map(({ name, path }, idx) => (
            <li key={idx}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
};

export default DropdownItem;
