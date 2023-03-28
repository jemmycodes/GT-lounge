import hamburger from "../../../assets/hamburger.png";

const MenuCard = () => {
  return (
    <li className="bg-lang-card-color p-3 relative font-bold rounded-lg  text-white">
      <figure>
        <div className="splash-bg-blur w-full top-0 left-0 absolute"></div>
        <img
          src={hamburger}
          alt=""
          height={100}
          width={100}
          className="aspect-square"
        />
      </figure>
      <p>Joe's Special Burger</p>
      <p className="font-normal text-gray-200 -mt-1">delicious</p>
      <div className="flex justify-between items-center mt-1">
        <p className="first-letter:text-gold text mt-2">$42.00</p>
        <p className="bg-gold px-3 py-1 rounded-lg">+</p>
      </div>
    </li>
  );
};
export default MenuCard;
