import Link from "next/link";

const ButtonBreadcrumb = ({ num }) => {
  return (
    <Link className="common__gradient__bg active" href="#">
      <span>{num}</span>
    </Link>
  );
};

export default ButtonBreadcrumb;
