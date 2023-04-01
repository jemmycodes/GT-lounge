import React from "react";

const cartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  reduceFromCart: () => {},

  searchText: "",
  onSearch: () => {},
});

export default cartContext;
