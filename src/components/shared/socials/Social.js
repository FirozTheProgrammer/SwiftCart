const Social = ({ children, type }) => {
  const icons = [
    {
      name: "facebook",
      path: "https://www.facebook.com",
    },
    {
      name: "twitter",
      path: "https://x.com",
    },

    {
      name: "skype",
      path: "https://www.skype.com",
    },
    {
      name: "linkedin",
      path: "https://www.linkedin.com",
    },
  ];
  return (
    <div
      className={`headerarea__icon ${
        type === "copyright" ? "copyright__icon" : ""
      }`}
    >
      <ul>
        {icons.map(({ name, path }, idx) => (
          <li key={idx}>
            <a href={path}>
              <i className={`icofont-${name}`}></i>
            </a>
          </li>
        ))}

        {children ? children : ""}
      </ul>
    </div>
  );
};

export default Social;
