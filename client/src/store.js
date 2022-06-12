import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./Redux/Reducers/Reducers";

const middleware = [thunk];

const rootReducer = combineReducers({
  cartReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
