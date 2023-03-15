import { GrNext } from "react-icons/gr";
import { IoMdWine } from "react-icons/io";
import { GiBeerBottle, GiSparkSpirit } from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";

const menuList = [
  {
    name: "Food",
    icon: <MdOutlineFastfood />,
  },
  {
    name: "Beer",
    icon: <GiBeerBottle />,
  },
  {
    name: "Cognac and Spirit",
    icon: <GiSparkSpirit />,
  },
  {
    name: "Wine",
    icon: <IoMdWine />,
  },
];

function ChooseMenu({ language }) {
  const menuStyle = `menu-card-style ${
    !language ? "left-0 duration-700 delay-200  " : ""
  }`;
  return (
    <ul className={menuStyle}>
      {menuList.map((menu, index) => (
        <li
          key={index}
          className="cursor-pointer  flex justify-between items-center menu-items p-5 w-full"
        >
          <span className="flex text-xl gap-5">
            {menu.icon}
            {menu.name}
          </span>
          <span className="font-semibold text-2xl">
            <GrNext />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ChooseMenu;
