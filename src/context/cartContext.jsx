import React from "react";

const cartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  reduceFromCart: () => {},
  totalAmount: 0,
});

export default cartContext;
