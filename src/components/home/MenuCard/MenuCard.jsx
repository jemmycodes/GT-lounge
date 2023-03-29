import { useState } from "react";
import hamburger from "../../../assets/hamburger.webp";

const MenuCard = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <li className="bg-lang-card-color p-3 gap-4 items-center flex relative font-bold rounded-lg  text-white">
      <figure>
        <div className="splash-bg-blur px-28 -top-5 left-0 absolute"></div>
        <img
          src={hamburger}
          alt=""
          height={60}
          width={60}
          className=" aspect-square max-w-[5rem] object-cover "
        />
      </figure>
      <div className="flex flex-col gap-3 w-full">
        <span>
          <p>Joe's Special Burger</p>
          <p className="font-normal text-gray-200 text-sm -mt-1">delicious</p>
        </span>
        <div className="flex justify-between  items-center gap-2 ">
          <p className="first-letter:text-gold first-letter:text-base text text-xl">
            $42.00
          </p>
          <span className="space-x-2 flex">
            <div>
              <p className="bg-gold  px-2 rounded-md  py-[.1rem] cursor-pointer text-center">
                +
              </p>
            </div>

            <input
              type="number"
              value={quantity}
              className="  text-gold border border-gold bg-transparent focus:outline-none focus:border-2 max-w-[2rem]  rounded-md text-center"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <div>
              <p className="bg-gold px-2 rounded-md  py-[.1rem] cursor-pointer text-center">
                -
              </p>
            </div>
          </span>
        </div>
      </div>
    </li>
  );
};
export default MenuCard;
