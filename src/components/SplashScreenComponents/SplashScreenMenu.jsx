import { MenuItems } from "../index";
import { menuData } from "../../constants/appData";

function SplashScreenMenu() {
  return (
    <ul className="absolute bottom-10 w-[90%] mx-auto flex flex-col gap-5">
      {menuData.map(({ icon, type }) => (
        <MenuItems key={type} menu={type} icon={icon} />
      ))}
    </ul>
  );
}

export default SplashScreenMenu;
