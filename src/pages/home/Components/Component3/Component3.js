import "./Component3.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Component3 = ({ Data }) => {
  useEffect(() => {
    const $categories = window.$("#categories-owl-demo");
    $categories.owlCarousel({
      navigation: true,
      items: 6,
      itemsCustom: false,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 4],
      itemsTablet: [768, 3],
      itemsTabletSmall: false,
      itemsMobile: [479, 2],
    });
    return () => {
      $categories.trigger("destroy.owl.carousel");
    };
  }, []);

  return (
    <section id="Edit-section">
      <div className="container">
        <div className="pransh_name d-flex gap-2 ms-3">
          <span />
          <h6 className=" mt-1">Categories</h6>
        </div>
        <div className="row">
          <div className="row m-0 m-auto">
            <div className="col-12">
              <h2 className="mt-3 mb-3">Browse By Category</h2>
            </div>
          </div>
          <div className="row m-0 m-auto mt-1 mt-lg-1">
            <div className="col-12">
              <div id="categories-owl-demo" className="owl-carousel owl-theme">
                {Data.map((item) => (
                  <div
                    key={item.categoryId}
                    className="item text-center pt-4 mt-2"
                  >
                    <Link
                      to={item.categoryLink}
                      className="text-decoration-none"
                    >
                      <ion-icon name={item.categoryIcon}></ion-icon>
                      <p className="pt-2">{item.categoryName}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component3;
