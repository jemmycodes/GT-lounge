import { useReducer } from "react";
import cartContext from "./cartContext";

const CART_ACTIONS = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  reduceFromCart: "REDUCE_FROM_CART ",
};

const defaultCartState = {
  cart: [],
  totalAmount: 0,
};

const cartReducer = (state, { type, food }) => {
  if (type === CART_ACTIONS.addToCart) {
    // Check if item exists in the cart already
    const existingItem = state.cart.find((item) => item.id === food.id);
    let updatedCart;
    // if it does, increase the quantity by the item.quantity
    if (existingItem) {
      updatedCart = {
        ...existingItem,
        quantity: +food.quantity + +existingItem.quantity,
      };
    } else {
      // else add it to the cart
      updatedCart = state.cart.concat(food);
    }
    return { ...state, cart: updatedCart, totalAmount: 0 };
  }

  if (type === CART_ACTIONS.reduceFromCart) {
    return { ...state, quantity: quantity-- };
  }

  if (type === CART_ACTIONS.removeFromCart) {
    // check if it exists in the cart
    // if it exists, remove the item from the cart
  }
};

const AppProvider = ({ children }) => {
  const addItemToCartHandler = (food) => {
    dispatchApp({ type: CART_ACTIONS.addToCart, food });
  };

  const removeFromCartHandler = (id) => {
    dispatchApp({ type: CART_ACTIONS.removeFromCart, id });
  };

  const reduceFromCartHandler = () => {
    dispatchApp({ type: CART_ACTIONS.reduceFromCart });
  };

  const [cartState, dispatchApp] = useReducer(cartReducer, defaultCartState);
  console.log(cartState.cart);

  const context = {
    cart: cartState.cart,
    addToCart: addItemToCartHandler,
    removeFromCart: removeFromCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default AppProvider;
