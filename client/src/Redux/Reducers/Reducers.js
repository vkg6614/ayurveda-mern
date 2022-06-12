const {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  DELETE_SINGLE_CART,
} = require("../ActionTypes/ActionTypes");

export const cartReducer = (
  productData = JSON.parse(localStorage.getItem("getData")) || [],
  action
) => {
  switch (action.type) {
    case CREATE_PRODUCT_LOADING:
      return productData;
    case CREATE_PRODUCT_SUCCESS:
      // var tempPro = productData.map((data) => data._id === action.payload._id);

      localStorage.setItem(
        "getData",
        JSON.stringify([...productData, action.payload]) || []
      );
      return [...productData, action.payload];
    case CREATE_PRODUCT_FAIL:
      return action.payload;

    case DELETE_SINGLE_CART:
      let temp = productData.filter((data) => data._id !== action.payload);
      localStorage.setItem("getData", JSON.stringify(temp));
      return temp;
    default:
      return productData;
  }
};
