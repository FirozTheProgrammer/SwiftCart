const LoginPrimary = () => {
  return (
    <div className="loginarea sp_top_140 sp_bottom_200">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
            <ul
              className="nav  tab__button__wrap text-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="single__tab__link active"
                  data-bs-toggle="tab"
                  data-bs-target="#projects__one"
                  type="button"
                >
                  Login
                </button>
              </li>{" "}
              <li className="nav-item" role="presentation">
                <button
                  className="single__tab__link"
                  data-bs-toggle="tab"
                  data-bs-target="#projects__two"
                  type="button"
                >
                  Sing up
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content tab__content__wrapper" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="projects__one"
              role="tabpanel"
              aria-labelledby="projects__one"
            >
              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
                <div className="loginarea__wraper">
                  <div className="loginarea__heading">
                    <h5 className="login__title">Login</h5>
                    <p className="login__description">
                      {"Don't "}have an account yet?{" "}
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                      >
                        Sign up for free
                      </a>
                    </p>
                  </div>

                  <form action="#">
                    <div className="loginarea__form">
                      <label className="form__label">Username or email</label>
                      <input
                        className="common__login__input"
                        type="text"
                        placeholder="Your username or email"
                      />
                    </div>
                    <div className="loginarea__form">
                      <label className="form__label">Password</label>
                      <input
                        className="common__login__input"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="loginarea__form d-flex justify-content-between flex-wrap gap-2">
                      <div className="form__check">
                        <input type="checkbox" name="" id="remamber__pass" />
                        <label htmlFor="remamber__pass">Remember me</label>
                      </div>
                      <div className="text-end login__form__link">
                        <a href="#">Forgot your password?</a>
                      </div>
                    </div>
                    <div className="loginarea__button text-center">
                      <button className="default__button btn__black">
                        LOG IN
                      </button>
                    </div>
                  </form>

                  <div className="loginarea__social__option">
                    <ul className="loginarea__social__btn">
                      <li>
                        <a className="default__button btn__black" href="#">
                          <i className="icofont-facebook"></i> Gacebook
                        </a>
                      </li>{" "}
                      <li>
                        <a className="default__button btn__black" href="#">
                          <i className="icofont-google-plus"></i> Google
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="projects__two"
              role="tabpanel"
              aria-labelledby="projects__two"
            >
              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
                <div className="loginarea__wraper">
                  <div className="loginarea__heading">
                    <h5 className="login__title">Sing Up</h5>
                    <p className="login__description">
                      Already have an account?{" "}
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                      >
                        Log In
                      </a>
                    </p>
                  </div>

                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">First Name</label>
                          <input
                            className="common__login__input"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Last Name</label>
                          <input
                            className="common__login__input"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Username</label>
                          <input
                            className="common__login__input"
                            type="text"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Email</label>
                          <input
                            className="common__login__input"
                            type="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Password</label>
                          <input
                            className="common__login__input"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">
                            Re-Enter Password
                          </label>
                          <input
                            className="common__login__input"
                            type="password"
                            placeholder="Re-Enter Password"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="loginarea__form d-flex justify-content-between flex-wrap gap-2 sp_bottom_20">
                      <div className="form__check">
                        <input type="checkbox" name="" id="accpet__terms" />
                        <label htmlFor="accpet__terms">
                          Accept the Terms and Privacy Policy
                        </label>
                      </div>
                    </div>
                    <div className="login__button">
                      <button
                        type="submin"
                        className="default__button btn__black text-center"
                      >
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPrimary;
