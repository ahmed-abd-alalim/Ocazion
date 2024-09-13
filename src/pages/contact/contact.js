import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Path from "../../components/path/path";
import "./contact.css";

const Contact = ({ Data, SetData }) => {
  const ContactData = Data.Contact;
  return (
    <>
      <Helmet>
        <title>Ocazion | Contact</title>
        <meta name="description" content="Ocazion | Contact" />
      </Helmet>
      <section id="contact" className="my-4">
        <div className="container py-5">
          <Path pathName={"Contact"} />
          <div className="row mt-5">
            <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center">
              <div className="contactInfo px-4 py-5">
                <div>
                  <div className="d-flex">
                    <div className="iconStyle d-flex me-2">
                      <i className="bi bi-telephone d-flex align-items-center m-0 m-auto"></i>
                    </div>
                    <h6 className="d-flex align-items-center mt-1">
                      Call To Us
                    </h6>
                  </div>
                  <span className="d-block pt-3">
                    We are available 24/7,7 day a week.
                  </span>
                  <span className="d-block pt-2">Phone: +20-000-0000-000</span>
                </div>
                <hr className="my-4" />
                <div>
                  <div className="d-flex">
                    <div className="iconStyle d-flex me-2">
                      <i className="bi bi-envelope d-flex align-items-center m-0 m-auto"></i>
                    </div>
                    <h6 className="d-flex align-items-center mt-1">
                      Write To Us
                    </h6>
                  </div>
                  <span className="d-block pt-3">
                    Fill out form and we will contact you within 24 hours.
                  </span>
                  <span className="d-block pt-2">
                    Email: customer@ocazion.com
                  </span>
                  <span className="d-block pt-1">
                    Email: support@ocazion.com
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 mt-3 mt-lg-0">
              <div className="contactBox d-flex py-5 px-3">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-4 my-1 my-lg-0 d-flex justify-content-center">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="py-2 px-2"
                        placeholder="Your Name"
                        required
                        value={ContactData.name}
                        onChange={(n) => {
                          SetData({
                            ...Data,
                            Contact: {
                              ...Data.Contact,
                              name: n.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-12 col-lg-4 my-1 my-lg-0 d-flex justify-content-center">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-2 px-2"
                        placeholder="Your Email"
                        required
                        value={ContactData.email}
                        onChange={(e) => {
                          SetData({
                            ...Data,
                            Contact: {
                              ...Data.Contact,
                              email: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-12 col-lg-4 my-1 my-lg-0 d-flex justify-content-center">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="py-2 px-2"
                        placeholder="You Phone"
                        required
                        value={ContactData.phone}
                        onChange={(p) => {
                          SetData({
                            ...Data,
                            Contact: {
                              ...Data.Contact,
                              phone: p.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-center">
                      <textarea
                        id="message"
                        name="message"
                        className="ps-2 pt-2"
                        placeholder="You Message"
                        required
                        value={ContactData.message}
                        onChange={(m) => {
                          SetData({
                            ...Data,
                            Contact: {
                              ...Data.Contact,
                              message: m.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-end">
                      <Link to="#" className="py-2 px-4">
                        Send Message
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
