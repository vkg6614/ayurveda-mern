import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Redux/Actions/Actions";
import heart from "../../../images/heart.png";
import addtocart from "../../../images/addtocart.png";
import { useSelector } from "react-redux";
import "./Product.css";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartReducer);

  const handleAddToCartClick = (product) => {
    let temp = getData.filter((data) => data._id === product._id);
    if (!temp.length) {
      dispatch(cartAction(product));
    }
  };

  return (
    <>
      <div>
        <div className="single-cart-div">
          <div className="product-header-div">
            <img src={heart} alt="heart-logo" />
            <p>{product.product_quantity}</p>
          </div>
          <img
            height="120px"
            width="60%"
            src={product.product_img}
            alt={product.product_name}
          />
          <p className="product-name">{product.product_name}</p>
          <p className="product-price">
            <sup>₹</sup>
            {product.product_price}
          </p>
        </div>

        <div
          className="product-cart-div"
          onClick={() => handleAddToCartClick(product)}
        >
          <img src={addtocart} alt="cart-logo" />
          <p>Add to cart</p>
        </div>
      </div>
    </>
  );
};

export default Product;
