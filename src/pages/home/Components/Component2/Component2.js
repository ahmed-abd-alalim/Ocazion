import "./Component2.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Component2 = ({ TargetDate, Data, rawData, setrawData }) => {
  useEffect(() => {
    const $carousel = window.$("#flash-owl-demo");
    $carousel.owlCarousel({
      navigation: true,
    });
    return () => {
      $carousel.trigger("destroy.owl.carousel"); // Clean up jQuery carousel on unmount
    };
  }, []);

  const [date, setDate] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });
  useEffect(() => {
    function CountDown() {
      const now = new Date();
      const difference = TargetDate - now;
      if (difference <= 0) {
        clearInterval(intervalId);
        setDate({
          Days: "00",
          Hours: "00",
          Minutes: "00",
          Seconds: "00",
        });
        return;
      }
      const timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
      setDate(timeLeft);
    }
    const intervalId = setInterval(CountDown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (id) => {
    const updatedData = {
      ...rawData,
      Home: {
        ...rawData.Home,
        Component2: rawData.Home.Component2.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              cardActive: item.cardActive === "" ? "active" : "",
            };
          }
          return item;
        }),
      },
    };
    setrawData(updatedData);

    const newItem = updatedData.Home.Component2.find((item) => item.id === id);
    if (newItem) {
      const newCardData = {
        productPosition: "Component2",
        productImg: newItem.img,
        productName: newItem.title,
        productPrice: newItem.price,
        productQuantity: 1,
      };
      const itemExists = updatedData.Cart.some(
        (item) => item.productImg === newCardData.productImg
      );
      const updatedCart = itemExists
        ? updatedData.Cart.filter(
            (item) => item.productImg !== newCardData.productImg
          )
        : [...updatedData.Cart, newCardData];
      setrawData({ ...updatedData, Cart: updatedCart });
    }
  };
  return (
    <section id="Edit-section">
      <div className="container">
        <div className="pransh_name d-flex gap-2 ms-3">
          <span />
          <h6 className=" mt-1">Today's</h6>
        </div>
        <div className="row">
          <div className="row m-0 m-auto">
            <div className="col-5 col-lg-3 col-xl-2">
              <h2 className="mt-3">Flash Sales</h2>
            </div>
            <div className="col-12 col-lg-6 DateBox">
              <ul className="list-unstyled d-flex m-0 my-lg-1">
                <li className=" mx-1">
                  <div>
                    <span>Days</span>
                    <h4>{date.Days}</h4>
                  </div>
                </li>
                <li className="align-self-center mt-2">
                  <span>:</span>
                </li>
                <li className="mx-1">
                  <div>
                    <span>Hours</span>
                    <h4>{date.Hours}</h4>
                  </div>
                </li>
                <li className="align-self-center mt-2">
                  <span>:</span>
                </li>
                <li className="mx-1">
                  <div>
                    <span>Minutes</span>
                    <h4>{date.Minutes}</h4>
                  </div>
                </li>
                <li className="align-self-center mt-2">
                  <span>:</span>
                </li>
                <li className="mx-1">
                  <div>
                    <span>Seconds</span>
                    <h4>{date.Seconds}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row m-0 m-auto">
            <div className="col-12">
              <div id="flash-owl-demo" className="owl-carousel owl-theme">
                {Data.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="card mx-2">
                      <div className="card-img-top">
                        <img src={item.img} alt="..." width="100%" />
                        <div className="add py-1 pb-2 text-center">
                          <span>
                            <Link to="#">Buy Now</Link>
                          </span>
                        </div>
                        <div className="discount">
                          <span>{item.discount}</span>
                        </div>
                        <div className="H_I_icons">
                          <ul className="list-unstyled text-center">
                            <li className="mb-2">
                              <i className="bi bi-heart d-flex justify-content-center pt-2" />
                            </li>
                            <li
                              className="mt-1"
                              onClick={() => handleClick(item.id)}
                            >
                              <i
                                className={`bi ${
                                  item.cardActive
                                    ? "bi-bag-check-fill"
                                    : "bi-bag-plus"
                                } d-flex justify-content-center pt-2`}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body p-0 mt-3">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text m-0">
                          ${item.price}
                          <span className="text-decoration-line-through">
                            {item.oldPrice}
                          </span>
                        </p>
                        <div className="card-text d-flex gap-1">
                          <ul className="list-unstyled d-flex m-0">
                            <StarCollector reviewStar={item.reviewStar} />
                          </ul>
                          <span>({item.numperReview})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="viewAll text-center mt-3 mt-lg-5">
            <Link type="buttom" to="#" className="py-2 px-4">
              view all products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

function StarCollector({ reviewStar }) {
  const number = parseFloat(reviewStar);
  const starList = [];
  const fullStars = Math.floor(number);
  const hasHalfStar = number % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starList.push("full");
  }

  // Add half star if applicable
  if (hasHalfStar) {
    starList.push("half");
  }

  // Add empty stars
  while (starList.length < 5) {
    starList.push("empty");
  }

  return (
    <>
      {starList.map((star, index) => (
        <li key={index}>
          <ion-icon
            name={
              star === "full"
                ? "star"
                : star === "half"
                ? "star-half-outline"
                : "star-outline"
            }
          />
        </li>
      ))}
    </>
  );
}

export default Component2;
