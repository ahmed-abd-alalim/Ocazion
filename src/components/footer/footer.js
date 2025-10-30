import "./footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Data = [
  {
    footerHeder: "Support",
    footerTitle: [
      "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
      "ocazion@gmail.com",
      " +20-000-0000-000",
    ],
    footerLink: [],
  },
  {
    footerHeder: "Quick Link",
    footerTitle: ["Privacy Policya", "Termes Of Use", "FAQ", "Contact"],
    footerLink: ["/404", "/404", "/404", "/404"],
  },
];

const Footer = () => {
  let [email, setemail] = useState();

  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center pt-5 pb-3">
          <div className="col-12 col-lg-3 d-flex my-0 my-lg-3 mb-4 mb-lg-0">
            <div>
              <h4>Ocazion</h4>
              <h6 className="mb-3 mt-4">Subscribe</h6>
              <div>
                <p>Get 10% off your first order</p>
                <form action="#" className="d-flex gap-1 py-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="ps-2"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    value={email}
                  />
                  <button
                    to="#"
                    type="submit"
                    className="d-flex align-items-center"
                  >
                    <ion-icon name="send-outline"></ion-icon>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {Data.map((item, index) => (
            <div key={index} className="col-12 col-lg-3 my-3">
              <h5>{item.footerHeder}</h5>
              <ul className="list-unstyled mt-4">
                {item.footerTitle.map((linkName, index) => (
                  <li key={index} className="my-3">
                    <Link to={item.footerLink[index]}>{linkName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-12 col-lg-3 d-flex mt-3">
            <div>
              <h5>Download APP</h5>
              <div className="mt-4">
                <span>Save $3 with App New User Only</span>
                <div className="d-flex my-2">
                  <a href="URL">
                    <img
                      src="assets/images/footer/Qrcode.png"
                      alt="#"
                      width="90%"
                    />
                  </a>
                  <div>
                    <a href="URL" className="d-block pt-1">
                      <img
                        src="assets/images/footer/google-play.png"
                        alt="#"
                        width="90%"
                      />
                    </a>
                    <a href="URL" className="d-block pt-2">
                      <img
                        src="assets/images/footer/appstore.png"
                        alt="#"
                        width="90%"
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-3 ms-2">
                  <ul className="list-unstyled d-flex gap-4">
                    <li>
                      <a href="URL">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="URL">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="URL">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="URL">
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="socket text-center py-3">
        <p className="m-0">
          &copy; 2024 Ocazion. All Right Reserved by
          <a href="https://ahmedabdalalim.pages.dev/">
            <img
              src="https://raw.githubusercontent.com/ahmed-abd-alalim/ahmed-abd-alalim/main/assets/3A.png"
              alt="3A"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
