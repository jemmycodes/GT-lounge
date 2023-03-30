import { useReducer } from "react";
import { getTotalAmount } from "../constants/helpers";
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
  console.log(state.cart.length);
  if (type === CART_ACTIONS.addToCart) {
    // Check if item exists in the cart already
    const existingFoodIndex = state.cart.findIndex(
      (item) => item.id === food.id
    );
    const existingFood = state.cart[existingFoodIndex];
    let updatedCart, newTotalAmount;

    // if it does, increase the quantity by the item.quantity
    if (existingFood) {
      const updatedFood = {
        ...existingFood,
        quantity: +existingFood.quantity + +food.quantity,
        amount:
          (+existingFood.quantity + +food.quantity) *
          +existingFood.price.slice(1),
      };

      updatedCart = [...state.cart];
      updatedCart[existingFoodIndex] = updatedFood;
      newTotalAmount = getTotalAmount(state.cart, food);
    } else {
      // else add it to the cart
      updatedCart = state.cart.concat(food);
      newTotalAmount = getTotalAmount(state.cart, food);
    }

    return { ...state, cart: updatedCart, totalAmount: newTotalAmount };
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
    totalAmount: cartState.totalAmount,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default AppProvider;
