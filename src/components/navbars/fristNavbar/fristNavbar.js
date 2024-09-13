import "./fristNavbar.css";
import { Link } from "react-router-dom";

const FristNavbar = () => {
  return (
    <section id="f-N">
      <div className="container">
        <div className="row py-2">
          <div className="col-12 col-lg-8 text-center text-lg-end">
            <p className="mb-2 my-md-2 my-md-0 d-inline-block">
              summer sale for all swim suits and free express delivery - OFF
              50%!
            </p>
            <Link to="/home" className="ms-1">
              ShopNow
            </Link>
          </div>
          <div className="col-4 text-end d-none d-lg-block">
            <div className="dropdown mt-2">
              <button type="button" data-bs-toggle="dropdown">
                English
                <i className="bi bi-chevron-down mx-1" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    English
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FristNavbar;
