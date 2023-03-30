import { useContext, useState } from "react";
import appcontext from "../../../context/cartContext";
import { BiCartAdd } from "react-icons/bi";

const MenuCard = ({ id, price, description, image, name }) => {
  const [quantity, setQuantity] = useState(1);

  const { addToCart, removeFromCart } = useContext(appcontext);

  return (
    <li className="menu-cards">
      <div className="flex justify-between items-center gap-4">
        <figure>
          <div className="splash-bg-blur px-28 -top-8 left-0 absolute"></div>
          <img
            src={image}
            alt=""
            height={60}
            width={60}
            className=" aspect-square max-w-[5rem] object-cover "
          />
        </figure>
        <span>
          <h2 className="text-xl">{name}</h2>
          <p className="font-normal mt-1 text-gray-200 text-sm ">
            {description}
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between  items-center gap-2 ">
          <p className="first-letter:text-gold first-letter:text-base text text-xl">
            {price}
          </p>
          <span className="space-x-2 flex">
            <div>
              <p
                className="menu-btns"
                onClick={() => setQuantity((prevState) => prevState + 1)}
              >
                +
              </p>
            </div>
            <input
              type="number"
              value={quantity}
              className="quantity-input"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />

            <div>
              <p
                className="menu-btns"
                onClick={() => {
                  if (quantity <= 0) return;
                  setQuantity((prevState) => prevState - 1);
                }}
              >
                -
              </p>
            </div>
          </span>
          <BiCartAdd
            className="p-1 rounded-lg cursor-pointer font-bold bg-gold text-white text-3xl"
            onClick={() => {
              addToCart({
                id,
                image,
                quantity,
                name,
                price,
              });
              setQuantity(1);
            }}
          />
        </div>
      </div>
    </li>
  );
};
export default MenuCard;
