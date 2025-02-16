"use client";

import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import useSearch from "@/hooks/useSearch";
import getAllServices from "@/libs/getAllServices";
import CommonContext from "@/providers/CommonContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import serviceDetailsImage1 from "@/assets/img/service/service__details__1.png";
import serviceDetailsImage2 from "@/assets/img/service/service__details__2.png";
const ServiceDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const services = getAllServices();
  const currentService = services?.find(({ id }) => id === parseInt(currentId));

  const { title, desc, detailsImg } = currentService;
  const {
    searchString,
    searchedItems,
    previousSearchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(services, "/services");
  return (
    <div className="service__details sp_top_140 sp_bottom_160">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <CommonContext
              value={{
                searchedItems,
                handleSearch,
                handleSearchString,
                startSearch,
                closeSearch,
                isShowSearch,
                sidebar: "service",
                isShowQuickSearchResult,
                setIsShowQuickSearchResult,
              }}
            >
              <BlogSidebar sidebar={"service"} />
            </CommonContext>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-12">
            <div className="service__details__wraper">
              <div
                className="service__details__img"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Image src={detailsImg} alt="" placeholder="blur" />
              </div>
              <div
                className="service__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{title}</h4>
              </div>
              <div
                className="service__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Odio facilisis mauris sit amet massa vitae tortor condimentum.
                  Etiam sit amet nisl purus in mollis nunc sed. Quam vulputate
                  dignissim suspendisse in est ante in. Amet commodo nulla
                  facilisi nullam vehicula. Arcu vitae elementum curabitur vitae
                  nunc. Duis ultricies lacus sed turpis tincidunt id aliquet
                  risus feugiat. Aenean vel elit scelerisque mauris pellentesque
                  pulvinar. Turpis egestas maecenas pharetra convallis. Ac
                  turpis egestas maecenas pharetra convallis. Morbi tincidunt
                  augue interdum velit euismod. Accumsan sit amet nulla facilisi
                  morbi tempus. Scelerisque eleifend donec pretium vulputate
                  sapien nec sagittis aliquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Odio facilisis mauris sit amet massa vitae tortor condimentum.
                  Etiam sit amet nisl purus in mollis nunc sed. Quam vulputate
                  dignissim suspendisse in est ante in. Amet commodo nulla
                  facilisi nullam vehicula. Arcu vitae elementum curabitur vitae
                  nunc. Duis ultricies lacus sed turpis tincidunt id aliquet
                  risus feugiat. Aenean vel elit scelerisque mauris pellentesque
                  pulvinar.
                </p>
              </div>
              <div
                className="service__details__planning"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__img">
                      <Image
                        src={serviceDetailsImage2}
                        alt=""
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__inner">
                      <div className="service__details__planning__heading">
                        <h6>Implementation Planning:</h6>
                      </div>
                      <div className="service__details__planning__text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Odio facilisis mauris sit amet
                          massa vitae tortor condimentum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Odio facilisis mauris sit amet
                          massa vitae tortor condimentum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="service__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>Execution and Monitoring:</h4>
              </div>
              <div
                className="service__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Odio facilisis mauris sit amet massa vitae tortor condimentum.
                  Etiam sit amet nisl purus in mollis nunc sed. Quam vulputate
                  dignissim suspendisse in est ante in. Amet commodo nulla
                  facilisi nullam vehicula. Arcu vitae elementum curabitur vitae
                  nunc. Duis ultricies lacus sed turpis tincidunt id aliquet
                  risus feugiat. Aenean vel elit scelerisque mauris pellentesque
                  pulvinar. Turpis egestas maecenas pharetra convallis. Ac
                  turpis egestas maecenas pharetra convallis. Morbi tincidunt
                  augue interdum velit euismod. Accumsan sit amet nulla facilisi
                  morbi tempus. Scelerisque eleifend donec pretium vulputate
                  sapien nec sagittis aliquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Odio facilisis mauris sit amet massa vitae tortor condimentum.
                  Etiam sit amet nisl purus in mollis nunc sed. Quam vulputate
                  dignissim suspendisse in est ante in. Amet commodo nulla
                  facilisi nullam vehicula. Arcu vitae elementum curabitur vitae
                  nunc. Duis ultricies lacus sed turpis tincidunt id aliquet
                  risus feugiat. Aenean vel elit scelerisque mauris pellentesque
                  pulvinar.
                </p>
              </div>
              <div
                className="service__details__button"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Link className="default__button" href="/contact">
                  GET A FREE QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPrimary;
