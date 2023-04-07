import { useState } from "react";

import { BiCartAdd } from "react-icons/bi";
import Signs from "../interface/Signs";
import image from "../../assets/hamburger.webp";
import { useApp } from "../../context/AppContext";

const MenuCard = ({ id, price, description, name }) => {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useApp();

  return (
    <li className="menu-cards">
      <div className="flex items-center justify-between gap-4">
        <figure>
          <div className="absolute left-0 splash-bg-blur px-28 -top-8"></div>
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
          <p className="mt-1 text-sm font-normal text-gray-200 ">
            {description}
          </p>
        </span>
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center justify-between gap-2 ">
          <p className="text-xl first-letter:text-gold first-letter:text-base text">
            {price}
          </p>
          <span className="flex space-x-2">
            <Signs
              sign="-"
              classes="menu-btns"
              onClick={() => {
                if (quantity < 1) return;
                setQuantity((prevState) => prevState - 1);
              }}
            />
            <input
              type="number"
              value={quantity}
              className="quantity-input"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <Signs
              sign="+"
              classes="menu-btns"
              onClick={() => setQuantity((prevState) => prevState + 1)}
            />
          </span>
          <BiCartAdd
            className="p-1 text-3xl font-bold text-white rounded-lg cursor-pointer bg-gold"
            onClick={() => {
              addToCart({
                id,
                image,
                quantity: quantity || 1,
                name,
                price,
                amount: +quantity * +price.slice(1),
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
