import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./access.css";

const Signup = ({ Data, SetData }) => {
  const [signupData, setSignupData] = useState({
    fristName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function HandelAccess() {
    const updatedData = { ...Data.UserData };
    Object.keys(signupData).forEach((key) => {
      updatedData[key] = signupData[key];
    });
    SetData((prevData) => ({
      ...prevData,
      UserData: updatedData,
      Access: "true",
    }));
    setSignupData({
      fristName: "",
      lastName: "",
      email: "",
      password: "",
    });
    scrollToTop();
  }
  return (
    <>
      <Helmet>
        <title>Ocazion | SignUp</title>
        <meta name="description" content="Ocazion | SignUp" />
      </Helmet>
      <section id="access">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img
                src="assets/images/banners/signup.webp"
                alt="#"
                width="100%"
              />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-0 mt-lg-5 my-5 my-lg-0">
              <div>
                <h3>Create an account</h3>
                <p>Enter your details below</p>
                <form action="#" className="mt-4">
                  <input
                    type="text"
                    id="Frist Name"
                    name="Frist Name"
                    className="d-block py-2 my-2 w-100"
                    placeholder="Frist Name"
                    required
                    minLength={5}
                    value={signupData.fristName}
                    onChange={(fn) => {
                      setSignupData({
                        ...signupData,
                        fristName: fn.target.value,
                      });
                    }}
                  />
                  <input
                    type="text"
                    id="Last Name"
                    name="Last Name"
                    className="d-block py-2 my-2 w-100"
                    placeholder="Last Name"
                    required
                    minLength={5}
                    value={signupData.lastName}
                    onChange={(ln) => {
                      setSignupData({
                        ...signupData,
                        lastName: ln.target.value,
                      });
                    }}
                  />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="d-block py-2 my-2 w-100"
                    placeholder="Email or phone Numper"
                    required
                    value={signupData.email}
                    onChange={(e) => {
                      setSignupData({
                        ...signupData,
                        email: e.target.value,
                      });
                    }}
                  />
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="d-block py-2 my-2 w-100"
                    placeholder="Password"
                    required
                    minLength={8}
                    value={signupData.password}
                    onChange={(p) => {
                      setSignupData({
                        ...signupData,
                        password: p.target.value,
                      });
                    }}
                  />
                  <div className="mt-4">
                    <Link
                      to="/account"
                      className="py-2 w-100 d-flex justify-content-center"
                      id="CAbutton"
                      onClick={HandelAccess}
                    >
                      Create Account
                    </Link>
                    <span className="d-flex justify-content-center mt-4">
                      Alread have account?
                      <Link to="/login" className="ms-2">
                        Login
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
