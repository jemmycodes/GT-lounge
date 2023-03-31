import React from "react";

const cartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  reduceFromCart: () => {},
  increaseCount: () => {},
  decreaseCount: () => {},
});

export default cartContext;
