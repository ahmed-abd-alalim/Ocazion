import "./scrollUp.css";
import React, { useState, useEffect } from "react";

const Component8 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scrollUp">
      {isVisible && (
        <div
          className="scrollUp_deeb d-flex justify-content-center align-items-center"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </div>
      )}
    </div>
  );
};

export default Component8;
