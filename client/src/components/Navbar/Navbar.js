import React, { useEffect, useState } from "react";
import "./Navbar.css";
import arshlogo from "../../images/ARSH-logo.jpg";
import avatar from "../../images/avatar.png";
import cart from "../../images/cart.png";
import favourite from "../../images/favourite.png";
import notification from "../../images/notification.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction } from "../../Redux/Actions/Actions";

const Navbar = () => {
  const [totPrice, setTotPrice] = useState(0);
  const dispatch = useDispatch();
  const deleteCartHandleClick = (id) => {
    dispatch(deleteCartAction(id));
  };

  const [cartPage, setCartPage] = useState({ display: "none" });
  const getData = useSelector((state) => state.cartReducer);

  useEffect(() => {
    let data = getData.reduce((acc, currElem) => {
      return acc + currElem.product_price;
    }, 0);
    console.log(data, "da");
    setTotPrice(data);
  }, [getData]);

  return (
    <div className="navbar-container">
      <div className="cartdetails-div" style={cartPage}>
        {getData.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <div className="cart-heading">
              <h3>Photo</h3>
              <h3>Product Name</h3>
              <div></div>
            </div>
            {getData.map((data) => (
              <div key={data._id} className="single-cart-product">
                <img width="80px" src={data.product_img} alt="img" />
                <div className="single-cart-middle-div">
                  <p>
                    <strong>{data.product_name}</strong>
                  </p>
                  <p>
                    <strong>Price: </strong>₹{data.product_price}
                  </p>
                  <p>
                    <strong>Quantity: </strong> {data.product_quantity}
                  </p>
                </div>
                <i
                  className="material-icons"
                  onClick={() => deleteCartHandleClick(data._id)}
                >
                  delete
                </i>
              </div>
            ))}

            <p>
              <strong>Total: </strong>₹{totPrice}
            </p>
          </div>
        )}
      </div>
      <img src={arshlogo} alt="logo-arsh" />
      <div className="nav-Link">
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>
        <p>Export</p>
        <p>Blogs</p>
        <p>Contact</p>
      </div>
      <div className="profile-details">
        <img src={favourite} alt="favourite" />
        <img src={notification} alt="notification" />
        <div
          className="cartIcon-div"
          onClick={() =>
            cartPage.display === "none"
              ? setCartPage({ display: "block" })
              : setCartPage({ display: "none" })
          }
        >
          <img src={cart} alt="cart" />
          <p>{getData.length}</p>
        </div>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
