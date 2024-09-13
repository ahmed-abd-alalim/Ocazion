import "./Component7.css";
import { Link } from "react-router-dom";

const Component7 = ({ Data }) => {
  return (
    <section id="Edit-section">
      <div className="container">
        <div className="pransh_name d-flex gap-2 ms-3">
          <span />
          <h6 className=" mt-1">Featured</h6>
        </div>
        <div className="row m-0 m-auto">
          <div className="col-8">
            <h2 className="mt-3 mb-4">New Arrival</h2>
          </div>
        </div>
        <div className="row mx-0 mx-lg-2" id="Component7">
          <div className="col-12 col-lg-6">
            <div className="LBox pt-5">
              <img src={Data[0].productImage} alt="#" width="90%" />
              <div className="LBoxContant">
                <h6>{Data[0].productHeder}</h6>
                <p>{Data[0].productTitle}</p>
                <Link to={Data[0].productLink}>Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 align-content-center">
            <div className="row">
              <div className="col-12 mt-2 mt-lg-0">
                <div className="LBox d-flex justify-content-end">
                  <img src={Data[1].productImage} alt="#" width="70%" />
                  <div className="LBoxContant mb-2">
                    <h6>{Data[1].productHeder}</h6>
                    <p>{Data[1].productTitle}</p>
                    <Link to={Data[1].productLink}>Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 mt-2 mt-lg-3">
                <div className="LBox d-flex justify-content-center p-5">
                  <img src={Data[2].productImage} alt="#" />
                  <div className="LBoxContant">
                    <h6>{Data[2].productHeder}</h6>
                    <p>{Data[2].productTitle}</p>
                    <Link to={Data[2].productLink}>Shop Now</Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-2 mt-lg-3">
                <div className="LBox d-flex justify-content-center p-5">
                  <img src={Data[3].productImage} alt="#" />
                  <div className="LBoxContant">
                    <h6>{Data[3].productHeder}</h6>
                    <p>{Data[3].productTitle}</p>
                    <Link to={Data[3].productLink}>Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component7;
