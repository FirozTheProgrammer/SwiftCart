import DropdownItem from "./DropdownItem";

const DropdownContent = ({ dropdownContent }) => {
  const { title, dropdownItems } = dropdownContent;

  return (
    <div className="col-3 headerarea__mega__menu__single__wrap">
      <h4 className="headerarea__mega__menu__title">
        <a href="#">{title} </a>
      </h4>
      <ul className="headerarea__mega__menu__item">
        {dropdownItems?.map((item, idx) => (
          <DropdownItem key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownContent;
