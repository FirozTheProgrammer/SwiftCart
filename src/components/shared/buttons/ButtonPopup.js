import Link from "next/link";

const ButtonPopup = ({ link }) => {
  return (
    <Link
      className="video__card--link glightbox relative "
      style={{ zIndex: 20 }}
      data-gallery="video_popup"
      href={link ? link : "https://www.youtube.com/watch?v=gLb2Gbo_bbs"}
    >
      <svg
        width="13"
        height="15"
        viewBox="0 0 13 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 7.5L0.250002 14.8612L0.250003 0.138783L13 7.5Z"
          fill="#F8422E"
        />
      </svg>
    </Link>
  );
};

export default ButtonPopup;
