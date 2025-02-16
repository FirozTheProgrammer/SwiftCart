import Link from "next/link";

const ButtonPrimary = ({ text, path, button, type }) => {
  const actualType = type ? { type } : {};

  return (
    <>
      {path ? (
        <Link
          className={`default__button ${
            button === "blue"
              ? "btn__blue"
              : button === "white"
              ? " btn__white"
              : button === "black"
              ? "btn__black"
              : ""
          }`}
          href={path}
        >
          {text}
        </Link>
      ) : (
        <button
          className={
            button === "blue"
              ? "default__button btn__blue"
              : button === "white"
              ? "default__button btn__white"
              : "default__button"
          }
          {...actualType}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;
