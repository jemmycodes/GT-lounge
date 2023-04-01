import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import cartContext from "../../context/cartContext";
import Signs from "../interface/Signs";

const CartCard = ({ image, price, name, quantity, id }) => {
  const { addToCart, removeFromCart, reduceFromCart } = useContext(cartContext);

  return (
    <hgroup className="flex items-center justify-between gap-2 p-4 text-white bg-lang-card-color rounded-xl">
      <div className="flex items-center gap-2">
        <figure>
          <img
            src={image}
            alt=""
            height={30}
            width={70}
            className="rounded-full aspect-square"
          />
        </figure>
        <span className="flex flex-col gap-2">
          <h3 className="font-semibold whitespace-pre-wrap">{name}</h3>
          <span className="flex items-center gap-4">
            <p>{price}</p>
            <p className="text-sm text-gray-300">x{quantity}</p>
          </span>
        </span>
      </div>
      <span className="flex flex-col items-center justify-center gap-1 p-2 bg-gray-700 rounded-xl ">
        <Signs
          sign="+"
          id={id}
          name={name}
          price={price}
          quantity={quantity}
          image={image}
          classes="cursor-pointer"
          onClick={() =>
            addToCart({
              name,
              price,
              id,
              quantity: 1,
              image,
            })
          }
        />
        <Signs
          sign="-"
          id={id}
          name={name}
          price={price}
          quantity={quantity}
          classes="cursor-pointer"
          image={image}
          onClick={() => reduceFromCart(id)}
        />
        <div className="p-1 rounded-lg bg-gold">
          <MdDelete
            className="text-2xl cursor-pointer"
            onClick={() => removeFromCart(id)}
          />
        </div>
      </span>
    </hgroup>
  );
};

export default CartCard;
