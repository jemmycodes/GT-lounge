import React from "react";

const appcontext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalAmount: 0,
  totalQuantity: 0,
});

export default appcontext;
