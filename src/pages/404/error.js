import "./error.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Path from "../../components/path/path";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="Ocazion | 404 Not Found" />
      </Helmet>
      <section id="error">
        <div className="container my-5">
          <Path pathName={"404 Not Found"} />
          <div className="row">
            <div className="col-12 col-lg-6  d-flex justify-content-center">
              <img src="assets/images/banners/404.webp" alt="#" width="100%" />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center text-center align-items-center">
              <div>
                <h1 className="my-4">Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
                <div className="my-5 homeBtn">
                  <Link to="/home" className="py-2 px-4">
                    Back to home page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
