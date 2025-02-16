import aboutBgImage2 from "@/assets/img/about/about__bg__2.png";

const AboutWrapper = ({ children }) => {
  return (
    <div
      className="about__team__sec__wrap"
      style={{ background: `var(--pinkcolor) url('${aboutBgImage2.src}')` }}
    >
      {children}
    </div>
  );
};

export default AboutWrapper;
