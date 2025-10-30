import "./presentation.css";
import { useEffect, useState } from "react";

const Presentation = () => {
  useEffect(() => {
    const $presentationDemo = window.$("#presentationDemo");
    $presentationDemo.owlCarousel({
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      items: 1,
      itemsDesktop: false,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false,
    });
    return () => {
      $presentationDemo.trigger("destroy.owl.carousel");
    };
  }, []);

  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for the messageShown flag
    if (!localStorage.getItem("messageShown")) {
      setIsMessageVisible(true);
      localStorage.setItem("messageShown", "true");
    }
  }, []);

  const handleCloseMessage = () => {
    setIsMessageVisible(false);
  };
  return (
    <section
      id="presentation"
      className={`message-container ${isMessageVisible ? "visible" : "hidden"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center presentationBox ">
            <div className="presentationBoxDeep p-2">
              <div className="d-flex justify-content-center align-items-center">
                <div className="presentationBoxDeepImg">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://avatars.githubusercontent.com/u/122975937"
                      alt="#"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
              <div
                id="closeButton"
                className="d-flex justify-content-center align-items-center"
              >
                <ion-icon
                  name="close"
                  className="close-button"
                  onClick={handleCloseMessage}
                ></ion-icon>
              </div>
              <div
                id="presentationDemo"
                className="owl-carousel owl-theme pt-5 mx-2"
              >
                <div className="item text-center mt-2">
                  <h3>
                    welcome in <span className="d-block mt-2">ocazion</span>
                  </h3>
                </div>
                <div className="item text-center mt-1">
                  <h4>
                    my name is
                    <span className="d-block mt-2">ahmed abd alalim</span>
                  </h4>
                </div>
                <div className="item text-center mt-3">
                  <h6>
                    This project consists of{" "}
                    <span> 8 pages Built using React</span> that you can browse
                    it.
                  </h6>
                </div>
                <div className="item text-center mt-3">
                  <h6>
                    You can <span>create an account</span>, <span>log in</span>,{" "}
                    <span>store products inside the basket</span> and
                    <span> more...</span>
                  </h6>
                </div>
                <div className="item text-center">
                  <h6>
                    Knowing that this project consists of{" "}
                    <span> front end only </span> and is not linked to backend,
                    so{" "}
                    <span>
                      every data will added in website will remove with make
                      refresh.
                    </span>
                  </h6>
                </div>
                <div className="item text-center mt-3">
                  <h3>Enjoy browsing</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
