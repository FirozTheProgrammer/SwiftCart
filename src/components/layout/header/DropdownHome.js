import Image from "next/image";
import Link from "next/link";

const DropdownHome = ({ dropdownItems }) => {
  return (
    <div className="headerarea__submenu headerarea__mega__menu__wrapper headerarea__mega__menu__grid__5">
      <div className="row">
        {dropdownItems?.map(({ img, path, onepage, multipage }, idx) => (
          <div key={idx} className="col-3 headerarea__mega__menu__single__wrap">
            <div className="headerarea__mega__menu__thumb">
              <Link target="_blank" href={path}>
                <Image placeholder="blur" src={img} alt="Mega Menu" />
              </Link>
              <Link target="_blank" href={multipage.path}>
                <span className="headerarea__mega__menu__thumb__title">
                  {multipage.name}
                </span>
              </Link>
              <Link target="_blank" href={onepage.path}>
                <span className="headerarea__mega__menu__thumb__title title__onepage">
                  {onepage.name}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownHome;
