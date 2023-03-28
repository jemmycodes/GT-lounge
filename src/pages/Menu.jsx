import { MenuCard } from "../components";
import { AiOutlineSearch } from "react-icons/ai";

const Menu = () => {
  return (
    <section className="flex flex-col gap-4 my-5">
      <hgroup className="flex relative ">
        <input
          type="text"
          className="bg-transparent w-full border py-2 px-6 rounded-full border-gold focus:border-gold focus:border-2 focus:outline-none text-gold "
          placeholder="Search..."
        />
        <AiOutlineSearch className="text-gold right-4 top-1/2 -translate-y-1/2 font-bold absolute text-xl" />
      </hgroup>
      <ul className="flex flex-col gap-4   ">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </ul>
    </section>
  );
};
export default Menu;
