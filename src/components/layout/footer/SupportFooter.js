import Link from "next/link";

const SupportFooter = () => {
  const items = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About us",
      path: "/about",
    },
    {
      name: "Blog update",
      path: "/blogs",
    },
    {
      name: "Our services",
      path: "/services",
    },
    {
      name: "Testimonial",
      path: "#",
    },
  ];
  return (
    <div
      className="col-xl-2 col-lg-6 col-md-6 col-sm-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="footer__widget footer__support">
        <div className="footer__menu__title">
          <h6>SUPPORT :</h6>
        </div>
        <div className="footer__menu">
          <ul>
            {items?.map(({ name, path }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportFooter;
