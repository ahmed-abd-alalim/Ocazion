import "./Component5.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Component5 = ({ TargetDate, Data }) => {
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

  return (
    <section id="Edit-section">
      <div className="container">
        <div className="row offerBanner">
          <div className="col-12 col-lg-6 m-0 m-auto">
            <div className="my-5 ms-1 ms-lg-4">
              <span className="d-flex mb-4">{Data[0].type}</span>
              <h1>{Data[0].productHeder}</h1>
              <ul className="list-unstyled d-flex justify-content-center justify-content-lg-start my-5">
                <li className="mx-2 mx-lg-3 d-flex justify-content-center">
                  <div className="m-0 my-auto">
                    <span>{date.Days}</span>
                    <span>Days</span>
                  </div>
                </li>
                <li className="mx-2 mx-lg-3 d-flex justify-content-center">
                  <div className="m-0 my-auto">
                    <span>{date.Hours}</span>
                    <span>Hours</span>
                  </div>
                </li>
                <li className="mx-2 mx-lg-3 d-flex justify-content-center">
                  <div className="m-0 my-auto">
                    <span>{date.Minutes}</span>
                    <span>Minutes</span>
                  </div>
                </li>
                <li className="mx-2 mx-lg-3 d-flex justify-content-center">
                  <div className="m-0 my-auto">
                    <span>{date.Seconds}</span>
                    <span>Seconds</span>
                  </div>
                </li>
              </ul>
              <Link
                to={Data[0].productLink}
                className="text-decoration-none py-2 px-4"
              >
                Buy Now
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 m-0 m-auto py-5" id="whiteShadow">
            <div className="d-flex justify-content-center">
              <img src={Data[0].productImg} alt="#" width="95%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component5;
