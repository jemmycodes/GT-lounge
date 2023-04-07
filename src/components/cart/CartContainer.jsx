import emptyCart from "../../assets/empty-cart.webp";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";

import { CartItem } from "..";
import { useLanguage } from "../../context/LanguageContext";

import { useApp } from "../../context/AppContext";

const CartContainer = () => {
  const { data } = useLanguage();

  const { cart, totalAmount } = useApp();

  return (
    <>
      <header className="bg-white p-6 h-[10vh] flex text-bgBlack justify-between items-center">
        <Link to={`/menu/${data?.categories[0]?.type}`}>
          <MdKeyboardBackspace className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold"> {data?.cart?.cart}</h1>
        <BsCart4 className="text-2xl font-bold" />
      </header>
      <section className="bg-bgBlack h-[90vh] overflow-y-scroll scrollbar-hide rounded-t-3xl p-6 pb-1">
        <section className="flex flex-col gap-4 h-[77%] overflow-y-scroll scrollbar-hide">
          {cart.length ? (
            cart.map(({ image, price, quantity, name, id }) => {
              return (
                <CartItem
                  image={image}
                  price={price}
                  quantity={quantity}
                  name={name}
                  key={id}
                  id={id}
                />
              );
            })
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
                {data?.cart?.empty}
              </figcaption>
            </figure>
          )}
        </section>
        <section className="absolute bottom-0 left-0 flex flex-col w-full gap-5 p-5 text-white bg-lang-card-color rounded-t-3xl">
          <span className="flex items-center justify-between">
            <p className="text-xl"> {data?.cart?.total}</p>
            <p className="font-bold first-letter:text-gold">${totalAmount}</p>
          </span>

          <button className="p-2 rounded-full bg-gold">
            {data?.cart?.checkout}
          </button>
        </section>
      </section>
    </>
  );
};

export default CartContainer;
