import { useReducer } from "react";
import appcontext from "./appcontext";

const ACTIONS = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
};

const defaultValues = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const appReducer = (state, action) => {
  if (action.type === ACTIONS.addToCart) {
    console.log("item added to cart");
    console.log(action.item);
  }
};

const AppProvider = ({ children }) => {
  const addItemToCartHandler = (item) => {
    dispatchApp({ type: ACTIONS.addToCart, item });
  };

  const [appState, dispatchApp] = useReducer(appReducer, defaultValues);
  const context = {
    // cart: appState.cart,
    addToCart: addItemToCartHandler,
  };

  return <appcontext.Provider value={context}>{children}</appcontext.Provider>;
};

export default AppProvider;
