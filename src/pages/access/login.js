import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./access.css";

const Login = ({ Data, SetData }) => {
  const [loginData, setLoginData] = useState({
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
    Object.keys(loginData).forEach((key) => {
      updatedData[key] = loginData[key];
    });
    SetData((prevData) => ({
      ...prevData,
      UserData: updatedData,
      Access: "true",
    }));
    setLoginData({
      email: "",
      password: "",
    });
    scrollToTop();
  }
  return (
    <>
      <Helmet>
        <title>Ocazion | LogIn</title>
        <meta name="description" content="Ocazion | LogIn" />
      </Helmet>
      <section id="access">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img
                src="assets/images/banners/login.webp"
                alt="#"
                width="100%"
              />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-0 mt-lg-5 my-5 my-lg-0">
              <div>
                <h3>Login to Ocazion</h3>
                <p>Enter your details below</p>
                <form action="#" className="mt-4">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="d-block py-2 my-2"
                    placeholder="Email or phone Numper"
                    value={loginData.email}
                    onChange={(e) => {
                      setLoginData({
                        ...loginData,
                        email: e.target.value,
                      });
                    }}
                    required
                  />
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="d-block py-2 my-2"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(p) => {
                      setLoginData({
                        ...loginData,
                        password: p.target.value,
                      });
                    }}
                    required
                  />
                  <div className="mt-4 d-flex justify-content-between">
                    <Link
                      to="/account"
                      className="py-1 px-3"
                      id="CAbutton"
                      onClick={HandelAccess}
                    >
                      Log in
                    </Link>
                    <span className="d-flex align-items-center">
                      <Link to="#"> Forget Password?</Link>
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

export default Login;
