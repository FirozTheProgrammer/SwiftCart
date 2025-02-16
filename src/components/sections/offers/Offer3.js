import bannerImage1 from "@/assets/img/banner/1.jpg";
import bannerImage2 from "@/assets/img/banner/2.jpg";
import bannerImage3 from "@/assets/img/banner/3.jpg";
import Image from "next/image";
import Link from "next/link";

const Offer3 = () => {
  const items = [
    { offer: "black friday", img: bannerImage1 },
    { offer: "cyber monday", img: bannerImage2 },
    { offer: "discount", img: bannerImage3 },
  ];
  return (
    <section className="simple__banners sp_top_80 sp_bottom_80 special__spacing">
      <div className="container-fluid full__width__padding">
        <div className="simple__banners__wrap">
          <div className="row justify-content-center">
            {items?.map(({ img, offer }, idx) => (
              <div
                key={idx}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={`${1500 + 200 * idx}`}
              >
                <div className="simple__banners__item">
                  <Link href={`/shop?offer=${offer?.split(" ").join("-")}`}>
                    <Image src={img} alt="Simple Banner" placeholder="blur" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer3;
