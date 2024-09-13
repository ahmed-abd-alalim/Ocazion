import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./account.css";
import Path from "../../components/path/path";
import { useState } from "react";

const Account = ({ Data, SetData }) => {
  const [newData, setNewData] = useState({
    fristName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  function HandelNewData() {
    const finalData = Object.entries(newData)
      .filter(([key, item]) => item !== "")
      .reduce((acc, [key, item]) => {
        acc[key] = item;
        return acc;
      }, {});

    let updatedData = { ...Data.UserData };
    Object.keys(finalData).forEach((key) => {
      if (finalData[key] !== "" && finalData[key] !== undefined) {
        updatedData[key] = finalData[key];
      }
    });
    SetData({
      ...Data,
      UserData: updatedData,
    });
    setNewData({
      fristName: "",
      lastName: "",
      email: "",
      address: "",
    });
    scrollToTop();
  }

  function HandelAccess() {
    SetData({ ...Data, Access: "" });
    scrollToTop();
  }
  return (
    <>
      <Helmet>
        <title>Ocazion | Account</title>
        <meta name="description" content="Ocazion | Account" />
      </Helmet>
      <section id="userAcount" className="mt-5 mb-4">
        <div className="container py-2">
          <Path pathName={"Account"} />
          <div className="row mt-4 mt-lg-5">
            <div className="col-10 col-lg-7 m-0 m-auto userAcountDeep my-5 py-2">
              <div className="d-flex justify-content-center align-items-center mb-3 mt-2">
                <div className="userImg d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/user.png"
                    alt="user Img"
                    width="100%"
                  />
                  <div className="changImge py-1">
                    <ion-icon name="camera"></ion-icon>
                  </div>
                </div>
              </div>
              <h4 className="mt-5 mb-4 ms-2 ms-lg-4">Edit Your Profile</h4>
              <div className="row prfileInbut">
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <div>
                    <span className="d-block my-1 ms-1">Frist Name</span>
                    <input
                      type="text"
                      className="py-2 ps-2"
                      placeholder={Data.UserData.fristName}
                      value={newData.fristName}
                      onChange={(fn) =>
                        setNewData({
                          ...newData,
                          fristName: fn.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center mt-2 mt-lg-0">
                  <div>
                    <span className="d-block my-1 ms-1">Last Name</span>
                    <input
                      type="text"
                      className="py-2 ps-2"
                      placeholder={Data.UserData.lastName}
                      value={newData.lastName}
                      onChange={(ln) =>
                        setNewData({
                          ...newData,
                          lastName: ln.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row prfileInbut mt-2">
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <div>
                    <span className="d-block my-1 ms-1">Email</span>
                    <input
                      type="text"
                      className="py-2 ps-2"
                      placeholder={Data.UserData.email}
                      value={newData.email}
                      onChange={(e) =>
                        setNewData({
                          ...newData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center mt-2 mt-lg-0">
                  <div>
                    <span className="d-block my-1 ms-1">Address</span>
                    <input
                      type="text"
                      className="py-2 ps-2"
                      placeholder={Data.UserData.address}
                      value={newData.address}
                      onChange={(a) =>
                        setNewData({
                          ...newData,
                          address: a.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <span className="ms-2 ms-lg-5 d-flex mt-3">Password Changes</span>
              <div className="prfileInbutPasswor d-flex justify-content-center align-items-center">
                <div className="w-100 mx-2 mx-lg-5">
                  <div>
                    <input
                      type="text"
                      className="py-2 ps-2 my-2"
                      placeholder="Current Password"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="py-2 ps-2 my-2"
                      placeholder="New Password"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="py-2 ps-2 my-2"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
              </div>
              <div className="row mx-2 mx-lg-5 my-4">
                <div className="col-12 col-lg-6 d-flex  justify-content-center justify-content-lg-start align-items-center">
                  <Link to="#" className="py-2 px-4" onClick={HandelNewData}>
                    Save Changes
                  </Link>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center logoutBtn mt-3 mt-lg-0">
                  <Link
                    to="/login"
                    className="py-2 px-4"
                    onClick={HandelAccess}
                  >
                    Logout
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

export default Account;
