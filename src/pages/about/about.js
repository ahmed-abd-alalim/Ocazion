import "./about.css";
import { Helmet } from "react-helmet-async";
import Path from "../../components/path/path";
import { useEffect } from "react";

const About = ({ Data }) => {
  const AboutData = Data.About;

  useEffect(() => {
    const $employees = window.$("#employees");
    $employees.owlCarousel({
      navigation: true,
      items: 3,
      itemsCustom: false,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [768, 2],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
    });
    return () => {
      $employees.trigger("destroy.owl.carousel");
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Ocazion | About</title>
        <meta name="description" content="Ocazion | About" />
      </Helmet>
      <div id="about">
        <section className="ourStory">
          <div className="container">
            <Path pathName={"About"} />
            <div className="row mx-2 mt-4">
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div>
                  <h1>Our Story</h1>
                  <div className="mt-4 ms-2 ms-lg-0">
                    <p>
                      Launced in 2015, Exclusive is South Asia's premier online
                      shopping makterplace with an active presense in
                      Bangladesh. Supported by wide range of tailored marketing,
                      data and service solutions, Exclusive has 10,500 sallers
                      and 300 brands and serves 3 millioons customers across the
                      region.
                    </p>
                    <p className="mt-4">
                      Exclusive has more than 1 Million products to offer,
                      growing at a very fast. Exclusive offers a diverse
                      assotment in categories ranging from consumer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/about/ourStory.png"
                    alt="#"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="results">
          <div className="container">
            <div className="row mx-5">
              {AboutData.result.map((item) => (
                <div
                  key={item.resultId}
                  className="col-12 col-lg-3 d-flex justify-content-center my-2 my-lg-0 "
                >
                  <div className="resultBox text-center py-3">
                    <div className="d-flex justify-content-center my-2">
                      <div className="resultBoxIcon d-flex justify-content-center align-items-center">
                        <span className="resultBoxIconDeeb d-flex justify-content-center align-items-center">
                          <i className={item.resultIcon}></i>
                        </span>
                      </div>
                    </div>
                    <h3 className="m-0">{item.resultNumper}</h3>
                    <span>{item.resultTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="employees">
          <div className="container">
            <div className="row mx-2">
              <div className="col-12">
                <div id="employees" className="owl-carousel owl-theme">
                  {AboutData.employees.map((item) => (
                    <div key={item.employeId} className="item mx-4">
                      <div className="card">
                        <div className="card-img-top pt-2 d-flex justify-content-center">
                          <img src={item.employeImg} alt="..." width="90%" />
                        </div>
                        <div className="card-body p-0 my-3">
                          <h2 className="card-title">{item.employeName}</h2>
                          <p className="card-text">{item.employeJob}</p>
                          <p className="card-text">
                            <div>
                              <a href={item.employesocialMediaLink.twitter}>
                                <i className="bi bi-twitter mx-2"></i>
                              </a>
                              <a href={item.employesocialMediaLink.instagram}>
                                <i className="bi bi-instagram mx-2"></i>
                              </a>
                              <a href={item.employesocialMediaLink.linkedIn}>
                                <i className="bi bi-linkedin m-2"></i>
                              </a>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
