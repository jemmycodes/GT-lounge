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

const appReducer = (state, action) => {};

const AppProvider = ({ children }) => {
  const context = {
    cart: [],
  };

  const [appState, dispatchApp] = useReducer(appReducer, defaultValues);

  return <appcontext.Provider value={context}>{children}</appcontext.Provider>;
};

export default AppProvider;
