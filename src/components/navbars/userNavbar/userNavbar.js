import "./userNavbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import $ from "jquery";

const GuestNabar = ({ Data }) => {
  const [searchInput, setSearchInput] = useState();
  const cardLength = Data?.length || 0;
  React.useEffect(() => {
    let isSearchBoxVisible = false;
    $("#search_input_box").hide();
    $("#search").on("click", function () {
      if (isSearchBoxVisible) {
        $("#search_input_box").slideUp(500);
        isSearchBoxVisible = false;
      } else {
        $("#search_input_box").slideDown(500);
        isSearchBoxVisible = true;
      }
    });
    $(document).click(function (event) {
      // Check if the click was outside the #search_input_box
      if (!$(event.target).closest("#Nave").length) {
        $("#search_input_box").slideUp(500);
        isSearchBoxVisible = false;
      }
    });
  }, []);

  const handleLinkClick = () => {};
  return (
    <div id="Nave">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid pt-0 pb-0 pt-lg-4 pb-lg-1">
          <Link className="navbar-brand ms-0 ms-lg-5" to="/home">
            Ocazion
          </Link>
          <div className="d-flex gap-2">
            <div className="H_B_f d-flex d-lg-none mt-1 justify-content-center align-items-center">
              <i className="bi bi-search me-3" id="search" />
              <i className="bi bi-heart me-2" />
              <Link to="./cart">
                <div className="d-inline-block">
                  <div className="d-flex cartCus ">
                    <i className="bi bi-cart3 mx-1" />
                    <div className="d-flex justify-content-center align-items-center cartCusDeep p-1">
                      <span className="d-flex justify-content-center align-items-center">
                        {cardLength}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <NavLink to="/account" className="ms-3 acountIngparont">
                <div className="acountIng overflow-hidden">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="assets/images/user.png" alt="#" width="100%" />
                  </div>
                </div>
              </NavLink>
            </div>
            <button
              className="navbar-toggler p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvasLg"
              aria-controls="navbarOffcanvasLg"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-filter-right" />
            </button>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            <div className="offcanvas-header d-flex  d-lg-none justify-content-between">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Ocazion
              </h5>
              <ion-icon
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                name="close"
              ></ion-icon>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav m-auto mb-3 mb-lg-1">
                <li className="nav-item me-0 me-lg-5 my-2 my-lg-0">
                  <NavLink
                    className="nav-link pb-0 px-0"
                    to="/home"
                    onClick={handleLinkClick}
                  >
                    Home
                  </NavLink>
                </li>
                <hr className="d-block d-lg-none" />
                <li className="d-block d-lg-none nav-item  my-2">
                  <nav className="navbar navbar-expand-lg py-1">
                    <div className="mt-1">
                      <span>Category</span>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent2"
                      aria-controls="navbarSupportedContent2"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                    <div
                      className="collapse navbar-collapse category"
                      id="navbarSupportedContent2"
                    >
                      <ul className="list-unstyled mt-3 ms-2">
                        <li className="nav-item">
                          <Link
                            className="nav-link collapsed d-flex justify-content-between"
                            data-bs-target="#forms-nav_on"
                            data-bs-toggle="collapse"
                            to="#"
                          >
                            <span>Womans Fashion</span>
                            <i className="bi bi-plus-circle ms-5" />
                          </Link>
                          <ul
                            id="forms-nav_on"
                            className="nav-content collapse list-unstyled ms-2"
                            data-bs-parent="#sidebar-nav"
                          >
                            <li>
                              <Link to="#" onClick={handleLinkClick}>
                                <span>Womans Fashion</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" onClick={handleLinkClick}>
                                <span>Womans Fashion</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <hr />
                        <li className="nav-item">
                          <Link
                            className="nav-link collapsed d-flex justify-content-between"
                            data-bs-target="#forms-nav_tw"
                            data-bs-toggle="collapse"
                            to="#"
                            onClick={handleLinkClick}
                          >
                            <span>Mens Fashion</span>
                            <i className="bi bi-plus-circle" />
                          </Link>
                          <ul
                            id="forms-nav_tw"
                            className="nav-content collapse list-unstyled ms-2"
                            data-bs-parent="#sidebar-nav"
                          >
                            <li>
                              <Link to="#" onClick={handleLinkClick}>
                                <span>Mens Fashion</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" onClick={handleLinkClick}>
                                <span>Mens Fashion</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <hr />
                        <li>
                          <Link to="#" onClick={handleLinkClick}>
                            Electronics
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link to="#" onClick={handleLinkClick}>
                            home &amp; lifestyle
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link to="#" onClick={handleLinkClick}>
                            medicine
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link to="#" onClick={handleLinkClick}>
                            sports &amp; outdoor
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link to="#" onClick={handleLinkClick}>
                            babys &amp; toys
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link to="#" onClick={handleLinkClick}>
                            groceies &amp; pets
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link to="#" onClick={handleLinkClick}>
                            health &amp; beauty
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </li>
                <hr className="d-block d-lg-none" />
                <li className="nav-item  me-0 me-lg-5 my-2 my-lg-0">
                  <NavLink
                    className="nav-link pb-0 px-0"
                    to="/contact"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </NavLink>
                </li>
                <hr className="d-block d-lg-none" />
                <li className="nav-item  my-2 my-lg-0">
                  <NavLink
                    className="nav-link pb-0 px-0"
                    to="/about"
                    onClick={handleLinkClick}
                  >
                    About
                  </NavLink>
                </li>
                <hr className="d-block d-lg-none" />
              </ul>
              <div className="d-flex">
                <form className="p-1 me-3  d-none d-lg-flex" role="search">
                  <input
                    className="form-control me-2 align-self-center"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />
                  <button type="submit">
                    <i className="bi bi-search" />
                  </button>
                </form>
              </div>
              <div className="H_B_s d-none d-lg-flex me-3 justify-content-center align-items-center">
                <i className="bi bi-heart me-3" />
                <Link to="/cart">
                  <div className="d-inline-block">
                    <div className="d-flex cartCus ">
                      <i className="bi bi-cart3 mx-1" />
                      <div className="d-flex justify-content-center align-items-center cartCusDeep p-1">
                        <span className="d-flex justify-content-center align-items-center">
                          {cardLength}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <NavLink to="/account" className="ms-3 acountIngparont">
                  <div className="acountIng overflow-hidden">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="assets/images/user.png" alt="#" width="100%" />
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* ######################## */}
      <div className="search_input d-lg-none px-3" id="search_input_box">
        <form className="d-flex py-2" action="#">
          <input
            type="text"
            className="w-100"
            id="search_input"
            placeholder="What are you looking for?"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button type="submit">
            <ion-icon name="send-outline"></ion-icon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuestNabar;
