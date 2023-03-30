import React from "react";

const AppContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  reduceFromCart: () => {},
  totalAmount: 0,
});

export default AppContext;
