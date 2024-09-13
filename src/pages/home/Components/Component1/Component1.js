import "./Component1.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const Component1 = ({ Data }) => {
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );
    if (carouselElement) {
      const carousel = new window.bootstrap.Carousel(carouselElement);
      return () => {
        carousel.dispose();
      };
    }
  }, [Data]);

  return (
    <section className=" mb-5 mt-3 mt-lg-0">
      <div className="container">
        <div className="row">
          <div className="col-3 col-xl-2 d-none d-lg-block l_nave">
            <div className="py-2 lister">
              <ul className=" p-0">
                <li className="nav-item">
                  <Link
                    className="nav-link collapsed"
                    data-bs-target="#forms-nav_on"
                    data-bs-toggle="collapse"
                    to="#"
                  >
                    <span>Womans Fashion</span>
                    <i className="bi bi-chevron-right float-end" />
                  </Link>
                  <ul
                    id="forms-nav_on"
                    className="nav-content collapse"
                    data-bs-parent="#sidebar-nav"
                  >
                    <li>
                      <Link to="#">
                        <span>Womans Fashion</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span>Womans Fashion</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link collapsed"
                    data-bs-target="#forms-nav_tw"
                    data-bs-toggle="collapse"
                    to="#"
                  >
                    <span>Mens Fashion</span>
                    <i className="bi bi-chevron-right float-end" />
                  </Link>
                  <ul
                    id="forms-nav_tw"
                    className="nav-content collapse "
                    data-bs-parent="#sidebar-nav"
                  >
                    <li>
                      <Link to="#">
                        <span>Mens Fashion</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span>Mens Fashion</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Electronics</Link>
                </li>
                <li>
                  <Link to="#">home &amp; lifestyle</Link>
                </li>
                <li>
                  <Link to="#">medicine</Link>
                </li>
                <li>
                  <Link to="#">sports &amp; outdoor</Link>
                </li>
                <li>
                  <Link to="#">babys &amp; toys</Link>
                </li>
                <li>
                  <Link to="#">groceies &amp; pets</Link>
                </li>
                <li>
                  <Link to="#">health &amp; beauty</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-9 m-0 m-auto ponar pt-2 mt-0 mt-lg-4">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <ol className="carousel-indicators">
                {Data.map((item) => (
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={item.sliderId - 1}
                    className={`${item.activeSlider} mx-1 m-0 m-auto`}
                    id="li_"
                    key={item.sliderId}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {Data.map((item) => (
                  <div
                    key={item.sliderId}
                    className={`carousel-item ${item.activeSlider}`}
                  >
                    <div className="row w-100">
                      <div className="col-12 col-lg-5 m-0 m-auto l_carousel">
                        <div className="mt-4 ms-3 mt-lg-0 mt-lg-0">
                          <div className="d-flex gap-3 mb-2">
                            <img
                              src={item.brandIcon}
                              alt=""
                              className="mb-2"
                              width="30px"
                            />
                            <h5 className="align-content-center">
                              {item.productName}
                            </h5>
                          </div>
                          <h1>{item.productTitle}</h1>
                          <div className="d-flex mt-4">
                            <Link
                              to={item.productLink}
                              className="d-flex gap-2"
                            >
                              <span className="mb-1 pb-1">Shop Now</span>
                              <i className="bi bi-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 r_carousel mt-5 mt-lg-3  mb-4">
                        <img src={item.productImage} alt="" width="100%" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component1;
