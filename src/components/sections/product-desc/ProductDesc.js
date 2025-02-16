import React from "react";

const ProductDesc = () => {
  return (
    <div className="descriptionarea sp_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 descriptionarea__tab__wrapper">
            <ul
              className="nav  descriptionarea__tab__button"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link active"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                  type="button"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link"
                  data-bs-toggle="tab"
                  data-bs-target="#video"
                  type="button"
                >
                  Video
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link"
                  data-bs-toggle="tab"
                  data-bs-target="#product__Type"
                  type="button"
                >
                  Product Type
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link"
                  data-bs-toggle="tab"
                  data-bs-target="#delivery__system"
                  type="button"
                >
                  Delivery system
                </button>
              </li>
            </ul>
            <div
              className="tab-content tab__content__wrapper"
              id="myTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description"
              >
                <p>
                  As opposed to using {"'Content here, content here'"}, making
                  it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for {"'lorem ipsum'"} will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose injected humour and the like. It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  nobis provident eius. Tenetur facilis, illo nesciunt numquam
                  non, odit iure, quia recusandae deleniti nihil excepturi?
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="video"
                role="tabpanel"
                aria-labelledby="video"
              >
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/vHdclsdkp28"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className="tab-pane fade"
                id="product__Type"
                role="tabpanel"
                aria-labelledby="product__Type"
              >
                <p>
                  As opposed to using {"'Content here, content here'"}, making
                  it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for {"'lorem ipsum'"} will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like. It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there
                  {" isn't "}anything embarrassing hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="delivery__system"
                role="tabpanel"
                aria-labelledby="delivery__system"
              >
                <p>
                  As opposed to using {"'Content here, content here'"}, making
                  it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for {"'lorem ipsum'"} will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like. It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there
                  {" isn't "}anything embarrassing hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
