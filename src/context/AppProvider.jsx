import { useReducer } from "react";
import cartContext from "./cartContext";

import "react-toastify/dist/ReactToastify.css";
import { CartItem } from "../components";

const CART_ACTIONS = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  reduceFromCart: "REDUCE_FROM_CART",
  search: "SEARCH_ITEM",
};

const defaultCartState = {
  cart: [],
  totalAmount: 0,
  searchValue: "",
};

const cartReducer = (state, action) => {
  if (action.type === CART_ACTIONS.addToCart) {
    // Check if item exists in the cart already
    const existingFoodIndex = state?.cart?.findIndex(
      (item) => item?.id === action?.food?.id
    );
    const existingFood = state?.cart[existingFoodIndex];
    let updatedCart;
    const newTotalAmount =
      state.totalAmount + +action.food.price.slice(1) * +action.food.quantity;

    // if it does, increase the quantity by the item.quantity
    if (existingFood) {
      const updatedFood = {
        ...existingFood,
        quantity: +existingFood?.quantity + +action.food?.quantity,
      };

      updatedCart = [...state?.cart];
      updatedCart[existingFoodIndex] = updatedFood;
    } else {
      // else add it to the cart
      updatedCart = state?.cart?.concat(action?.food);
    }

    return { ...state, cart: updatedCart, totalAmount: newTotalAmount };
  }

  if (action.type === CART_ACTIONS.removeFromCart) {
    // check if the quantity in  cart is more than 1
    const exitingItemIndex = state?.cart?.findIndex(
      (item) => item?.id === action?.id
    );
    let updatedCart, newTotalAmount;

    const existingFood = state?.cart[exitingItemIndex];
    newTotalAmount =
      state.totalAmount - +existingFood.price.slice(1) * +existingFood.quantity;

    updatedCart = state.cart.filter((item) => item.id !== action.id);

    return { ...state, cart: updatedCart, totalAmount: newTotalAmount };
  }

  if (action?.type === CART_ACTIONS.search) {
    const newSearchItem = action?.text;
    return { ...state, searchValue: newSearchItem };
  }

  if (action.type === CART_ACTIONS.reduceFromCart) {
    let newTotalAmount, updatedCart;

    const existingFoodIndex = state?.cart.findIndex(
      (item) => item.id === action.id
    );

    const existingFood = state.cart[existingFoodIndex];

    if (existingFood) {
      if (existingFood?.quantity === 1)
        return {
          ...state,
        };
      const updatedFood = {
        ...existingFood,
        quantity: +existingFood?.quantity - 1,
      };
      updatedCart = [...state.cart];
      updatedCart[existingFoodIndex] = updatedFood;

      newTotalAmount = state.totalAmount - +existingFood.price.slice(1);
    }

    return { ...state, cart: updatedCart, totalAmount: newTotalAmount };
  }
};

const AppProvider = ({ children }) => {
  const addItemToCartHandler = (food) => {
    dispatchApp({ type: CART_ACTIONS.addToCart, food });
  };

  const removeFromCartHandler = (id) => {
    dispatchApp({ type: CART_ACTIONS.removeFromCart, id });
  };

  const searchFoodHandler = (text) => {
    dispatchApp({ type: CART_ACTIONS.search, text });
  };

  const reduceFromCartHandler = (id) => {
    dispatchApp({ type: CART_ACTIONS.reduceFromCart, id });
  };

  const [cartState, dispatchApp] = useReducer(cartReducer, defaultCartState);

  const context = {
    cart: cartState.cart,
    addToCart: addItemToCartHandler,
    removeFromCart: removeFromCartHandler,
    reduceFromCart: reduceFromCartHandler,
    totalAmount: cartState.totalAmount,
    onSearch: searchFoodHandler,
    searchText: cartState.searchValue,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default AppProvider;
