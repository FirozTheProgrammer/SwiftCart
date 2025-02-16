import Image from "next/image";
import logoImage1 from "@/assets/img/logo/Logo_1.png";
import logoImage2 from "@/assets/img/logo/Logo_2.png";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const LogoHeader = () => {
  const { style, bodyBg } = useHeaderContex();
  return (
    <div className="headerarea__component">
      <div className="headerarea__logo">
        <Link href="/">
          <Image
            placeholder="blur"
            className={style === 4 ? "logo-image2" : ""}
            src={style === 4 && bodyBg !== "black" ? logoImage2 : logoImage1}
            alt="Bastun Logo"
          />
          {style === 4 ? (
            <Image
              placeholder="blur"
              className={"logo-image1"}
              src={style === 4 && bodyBg === "black" ? logoImage2 : logoImage1}
              alt="Bastun Logo"
            />
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default LogoHeader;
