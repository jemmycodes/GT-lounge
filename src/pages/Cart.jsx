import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";
import CartCard from "../components/interface/CartCard";
import cartContext from "../context/cartContext";
import emptyCart from "../assets/empty-cart.webp";

const Cart = () => {
  const { cart, totalAmount } = useContext(cartContext);

  const cartItems = cart.map(({ image, price, quantity, name, id }) => (
    <CartCard
      image={image}
      price={price}
      quantity={quantity}
      name={name}
      key={id}
      id={id}
    />
  ));

  return (
    <div className="flex flex-col h-full">
      <header className="bg-white p-6 h-[10vh] flex text-bgBlack justify-between items-center">
        <MdKeyboardBackspace className="text-2xl" />
        <h1 className="text-xl font-semibold">Cart</h1>
        <BsCart4 className="text-2xl font-bold" />
      </header>
      <section className="bg-bgBlack h-[90vh] overflow-y-scroll scrollbar-hide rounded-t-3xl p-6 pb-1">
        <section className="flex flex-col gap-4 h-[77%] overflow-y-scroll scrollbar-hide">
          {cart.length > 0 ? (
            cartItems
          ) : (
            <figure>
              <img
                src={emptyCart}
                alt=""
                height={500}
                width={500}
                className="mt-5"
              />
              <figcaption className="text-xl text-center text-gold">
                Your cart is empty!
              </figcaption>
            </figure>
          )}
        </section>
        <section className="absolute bottom-0 left-0 flex flex-col w-full gap-5 p-5 text-white bg-lang-card-color rounded-t-3xl">
          <span className="flex items-center justify-between">
            <p className="text-xl">Total</p>
            <p className="font-bold first-letter:text-gold">
              ${totalAmount.toFixed(2)}
            </p>
          </span>

          <button className="p-2 rounded-full bg-gold">Checkout</button>
        </section>
      </section>
    </div>
  );
};

export default Cart;
