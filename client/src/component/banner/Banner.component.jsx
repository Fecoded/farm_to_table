import { Link } from "react-router-dom";

const Banner = () => (
  <section
    className="swiper-slider-hero position-relative d-block vh-100"
    id="home"
  >
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide d-flex align-items-center overflow-hidden">
          <div
            className="slide-inner slide-bg-image d-flex align-items-center bg-cover"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "images/banner.jpg"
              })`,
            }}
          >
            <div className="bg-overlay"></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="title-heading text-center">
                    <h1 className="heading text-white title-dark mb-4">
                      Farm to Table <br />
                    </h1>
                    <p className="para-desc mx-auto text-white-50">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum, eaque.
                    </p>

                    <div className="mt-4 pt-2">
                      <Link to="/product" className="btn btn-success">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
