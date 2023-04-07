import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );
  const [totalAmount, setTotalAmount] = useState(0);

  const itemExists = (id) => cart.findIndex((item) => item?.id === id);

  const addToCart = (item) => {
    // Check if item exists in the cart already
    const existingFoodIndex = itemExists(item.id);

    if (existingFoodIndex === -1) {
      setCart((prevCart) => [item, ...prevCart]);
    } else {
      const existingFood = cart[existingFoodIndex];
      const cartData = [...cart];
      cartData.splice(existingFoodIndex, 1, {
        ...item,
        quantity: +item.quantity + +existingFood.quantity,
      });
      setCart(cartData);
    }
  };

  const removeFromCart = (id) => {
    const existingFoodIndex = itemExists(id);

    if (existingFoodIndex >= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
  };

  const reduceFromCart = (id) => {
    const existingFoodIndex = itemExists(id);
    if (existingFoodIndex >= 0) {
      const existingFood = cart[existingFoodIndex];
      if (existingFood.quantity === 1) return;
      const cartData = [...cart];
      cartData.splice(existingFoodIndex, 1, {
        ...existingFood,
        quantity: +existingFood.quantity - 1,
      });

      setCart(cartData);
    }
  };

  useEffect(() => {
    setTotalAmount(
      cart?.reduce((acc, curr) => acc + curr.quantity * curr.price.slice(1), 0)
    );
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Provider
      value={{ cart, addToCart, reduceFromCart, removeFromCart, totalAmount }}
    >
      {children}
    </Provider>
  );
};

const useApp = () => useContext(CartContext);
export { CartProvider, useApp };
