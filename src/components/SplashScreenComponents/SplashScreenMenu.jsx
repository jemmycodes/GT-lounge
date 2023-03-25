import { MenuItems } from "../index";
import { menuData } from "../../constants/appData";

function SplashScreenMenu({ showMenu }) {
  return (
    <ul
      className={`animate-fadeIn ${
        !showMenu
          ? "hidden absolute bottom-10 w-[90%] mx-auto  gap-5"
          : "flex flex-col animate-fadeIn absolute bottom-10 w-[90%] mx-auto  gap-5"
      }`}
    >
      {menuData.map(({ icon, type }) => (
        <MenuItems key={type} menu={type} icon={icon} />
      ))}
    </ul>
  );
}

export default SplashScreenMenu;
