import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";
import CartCard from "../components/interface/CartCard";
import cartContext from "../context/cartContext";

const Cart = () => {
  const { cart } = useContext(cartContext);

  return (
    <div className="flex flex-col h-full">
      <header className="bg-white p-6 h-[10vh] flex text-bgBlack justify-between items-center">
        <MdKeyboardBackspace className="text-2xl" />
        <h1 className="text-xl font-semibold">Cart</h1>
        <BsCart4 className="text-2xl font-bold" />
      </header>
      <section className="bg-bgBlack h-[90vh] overflow-y-scroll scrollbar-hide flex flex-col gap-4 rounded-t-3xl p-6 pb-1">
        {cart.map(({ image, price, quantity, name, id }) => (
          <CartCard
            image={image}
            price={price}
            quantity={quantity}
            name={name}
            key={id}
          />
        ))}
      </section>
      <section className="absolute flex gap-5 flex-col text-white  bottom-0 w-full left-0 bg-lang-card-color p-5 rounded-t-3xl">
        <span className="flex items-center justify-between">
          <p className="text-xl">Total</p>
          <p className="first-letter:text-gold font-bold">$500</p>
        </span>

        <button className="bg-gold p-2 rounded-full">Checkout</button>
      </section>
    </div>
  );
};

export default Cart;
