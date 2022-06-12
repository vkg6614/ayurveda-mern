import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./ProductLists.css";
import filter from "../../images/filter.png";
import sort from "../../images/sort.png";
import quantity from "../../images/quantity.png";
import axios from "axios";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/products");
    setProducts(data);
  };

  console.log(products);
  return (
    <div className="productlist-main-container">
      <div className="left-container">
        <div className="sort">
          <div className="sort-heading">
            <img src={sort} alt="sort-img" />
            <h3>Sort</h3>
          </div>
          <div>
            <h3>Featured</h3>
            <p>New Arrivals</p>
            <p>Discount</p>
            <p>Price (Highest first)</p>
            <p>Price (Lowest first)</p>
          </div>
        </div>
        <div className="filter">
          <div className="filter-heading">
            <img src={filter} alt="filter-img" />
            <h3>Filters</h3>
          </div>
          <div>
            <h3>All Products</h3>
            <p>Plant Growth Promoters</p>
            <p>Fertilizers</p>
            <p>Plant Potting Mix</p>
            <p>Garden Tools & Accessories</p>
          </div>
        </div>
        <div className="quantity">
          <div className="quantity-heading">
            <img src={quantity} alt="qty-img" />
            <h3>Quantity</h3>
          </div>
          <div>
            <h3>250 ml/g</h3>
            <p>500 ml/g</p>
            <p>1 Litre/Kg</p>
            <p>10 Kg</p>
            <p>15 Kg</p>
            <p>20 Kg</p>
          </div>
        </div>
      </div>
      <div className="product-list-main-div">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductLists;
