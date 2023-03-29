import hamburger from "../../../assets/hamburger.webp";
import { Input } from "../..";
import { useContext } from "react";
import appcontext from "../../../context/appcontext";

const MenuCard = ({ price, description, image, name }) => {
  const { addToCart, removeFromCart } = useContext(appcontext);

  return (
    <li className="bg-lang-card-color p-5 gap-4 items-center flex relative font-bold rounded-lg  text-white">
      <figure>
        <div className="splash-bg-blur px-28 -top-5 left-0 absolute"></div>
        <img
          src={image}
          alt=""
          height={60}
          width={60}
          className=" aspect-square max-w-[5rem] object-cover "
        />
      </figure>
      <div className="flex flex-col gap-3 w-full">
        <span>
          <p>{name}</p>
          <p className="font-normal text-gray-200 text-sm -mt-1">
            {description}
          </p>
        </span>
        <div className="flex justify-between  items-center gap-2 ">
          <p className="first-letter:text-gold first-letter:text-base text text-xl">
            {price}
          </p>
          <span className="space-x-2 flex">
            <div>
              <p
                className="bg-gold  px-2 rounded-md  py-[.1rem] cursor-pointer text-center"
                onClick={() =>
                  addToCart({
                    name,
                    price,
                    image,
                  })
                }
              >
                +
              </p>
            </div>

            <Input />
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
