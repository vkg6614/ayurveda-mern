import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_SUCCESS,
  DELETE_SINGLE_CART,
} from "../ActionTypes/ActionTypes";

export const cartAction = (item) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_LOADING });
    // const { data } = await api.fetchProduct();
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: item });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: error });
  }
};

export const deleteCartAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SINGLE_CART, payload: id });
  } catch (error) {
    console.log(error);
  }
};
