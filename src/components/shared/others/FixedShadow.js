const FixedShadow = ({ type }) => {
  return (
    <div>
      <div
        className={`theme__shadow__circle  ${
          type === 2 ? "" : "theme__shadow__circle--2"
        }`}
      ></div>
      <div
        className={`theme__shadow__circle  ${
          type === 2 ? "" : "theme__shadow__circle--2"
        }  shadow__right`}
      ></div>
    </div>
  );
};

export default FixedShadow;
