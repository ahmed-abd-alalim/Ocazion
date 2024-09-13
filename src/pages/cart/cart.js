import "./cart.css";
import Path from "../../components/path/path";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = ({ Data, SetData }) => {
  const cartRawData = Data.Cart;

  const handleChange = (index, event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      const updatedData = { ...Data };
      updatedData.Cart = updatedData.Cart.map((item, i) =>
        i === index ? { ...item, productQuantity: value } : item
      );
      SetData(updatedData);
    }
  };

  const handleRemoveClick = (index, item) => {
    SetData((prevData) => {
      const updatedData = { ...prevData };
      updatedData.Cart = updatedData.Cart.filter((_, i) => i !== index);
      const placeDataKey = item.productPosition;
      updatedData.Home[placeDataKey] = updatedData.Home[placeDataKey].map(
        (subItem) => ({
          ...subItem,
          cardActive: "", // Reset the cardActive property
        })
      );
      return updatedData;
    });
  };

  const handleClick = () => {
    SetData((prevData) => ({
      ...prevData,
      Cart: [],
      Home: {
        ...prevData.Home,
        Component2: prevData.Home.Component2.map((item) => ({
          ...item,
          cardActive: "",
        })),
        Component4: prevData.Home.Component4.map((item) => ({
          ...item,
          cardActive: "",
        })),
        Component6: prevData.Home.Component6.map((item) => ({
          ...item,
          cardActive: "",
        })),
      },
    }));
  };

  const subtotal = cartRawData.reduce(
    (acc, pro) => acc + pro.productQuantity * pro.productPrice,
    0
  );
  return (
    <>
      <Helmet>
        <title>Ocazion | Cart</title>
        <meta name="description" content="Ocazion | Cart" />
      </Helmet>
      <section id="cart">
        <div className="container my-5">
          <Path pathName={"Cart"} />
          <div className="row mt-5">
            <div className="col-10 m-0 m-auto">
              <table width="100%">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      width="25%"
                      className="text-center py-3 px-4 px-lg-0"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      width="25%"
                      className="text-center py-3 px-2 px-lg-0"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      width="25%"
                      className="text-center py-3 px-2 px-lg-0"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      width="15%"
                      className="text-center py-3 px-2 px-lg-0"
                    >
                      Delet
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <br />
                  {cartRawData.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center py-1">
                        <div>
                          <img src={item.productImg} alt="#" width="30%" />
                          <span className="d-block d-lg-inline">
                            {item.productName}
                          </span>
                        </div>
                      </td>
                      <td className="text-center py-1">${item.productPrice}</td>
                      <td className="text-center py-1">
                        <div className="spinner">
                          <input
                            type="number"
                            value={item.productQuantity}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </div>
                      </td>
                      <td className="text-center py-1">
                        <i
                          className="bi bi-x-lg"
                          onClick={() => handleRemoveClick(index, item)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-4 btn_cus mx-4 mx-lg-0">
            <div className="col-6 m-0 m-auto d-flex justify-content-center">
              <Link
                to="#"
                className="py-2 py-lg-2 px-3 px-lg-4"
                onClick={handleClick}
              >
                Update Cart
              </Link>
            </div>
            <div className="col-6 m-0 m-auto d-flex justify-content-center">
              <Link to="/home" className="py-2 py-lg-2 px-3 px-lg-4">
                Return To Shop
              </Link>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-lg-6 coupon d-flex justify-content-center">
              <div>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="ps-2 py-1 me-1"
                ></input>
                <button type="submit" className=" px-2 py-2">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="col-10 col-lg-4 py-3 px-4 m-0 m-auto cartBox mt-4 mt-lg-0">
              <div>
                <h5>Cart Total</h5>
                <div>
                  <div className="d-flex justify-content-between mt-4 pb-3 cartBoxDeeb">
                    <span>Subtotal:</span>
                    <span className="cusSpan">${subtotal}</span>
                  </div>
                  <div className="d-flex justify-content-between mt-4 pb-3 cartBoxDeeb">
                    <span>Shipping:</span>
                    <span className="cusSpan">Free</span>
                  </div>
                  <div className="d-flex justify-content-between mt-4 pb-3">
                    <span>Total:</span>
                    <span className="cusSpan">${subtotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
