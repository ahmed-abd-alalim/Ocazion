import "./Component6.css";
import { Link } from "react-router-dom";

const Component6 = ({ Data, rawData, setrawData }) => {
  const handleClick = (id) => {
    const updatedData = {
      ...rawData,
      Home: {
        ...rawData.Home,
        Component6: rawData.Home.Component6.map((item) => {
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

    const newItem = updatedData.Home.Component6.find((item) => item.id === id);
    if (newItem) {
      const newCardData = {
        productPosition: "Component6",
        productImg: newItem.img,
        productName: newItem.title,
        productPrice: newItem.price,
        productQuantity: 1,
      };
      const updatedCart = [...updatedData.Cart, newCardData];
      setrawData({ ...updatedData, Cart: updatedCart });
    }
  };

  return (
    <section id="Edit-section">
      <div className="container">
        <div className="pransh_name d-flex gap-2 ms-3">
          <span />
          <h6 className=" mt-1">Our Products</h6>
        </div>
        <div className="row m-0 m-auto">
          <div className="col-8">
            <h2 className="mt-3 mb-3">Explore Our Products</h2>
          </div>
        </div>
        <div className="row mt-1 mt-lg-1 mx-0 mx-lg-2" id="Component6">
          {Data.map((item) => (
            <div key={item.id} className="col-6 col-lg-3 m-0 m-auto my-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={item.img} alt="..." width="100%" />
                  <div className="add py-1 pb-2 text-center">
                    <span>
                      <Link to="#">Buy Now</Link>
                    </span>
                  </div>
                  <div className="H_I_icons">
                    <ul className="list-unstyled text-center">
                      <li className="mb-2">
                        <i className="bi bi-heart d-flex justify-content-center pt-2" />
                      </li>
                      <li className="mt-1" onClick={() => handleClick(item.id)}>
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
                  <div className="d-flex gap-2">
                    <p className="card-text m-0">${item.price}</p>
                    <div className="card-text d-flex gap-1">
                      <ul className="list-unstyled d-flex m-0">
                        <StarCollector reviewStar={item.reviewStar} />
                      </ul>
                      <span>({item.numperReview})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="viewAll text-center mt-4 mt-lg-5">
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
export default Component6;
