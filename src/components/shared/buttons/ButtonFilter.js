"use client";

const ButtonFilter = ({ option, idx, setCurrentIndex, currentIndex }) => {
  const { text, filterOption, filterText } = option;

  return (
    <button
      className={`btn common__gradient__bg  text-uppercase ${
        currentIndex === idx ? "active " : ""
      }`}
      onClick={() => {
        setCurrentIndex(idx);
        filterOption.filterSelection(`${filterText}`);
      }}
    >
      <span>{text}</span>
    </button>
  );
};

export default ButtonFilter;
