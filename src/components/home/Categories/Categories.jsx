import { menuData } from "../../../constants/appData";
import { Category } from "../../index";

const Categories = () => {
  return (
    <ul className=" hide-scrollbar">
      {menuData.map(({ type, icon }) => (
        <Category key={type} icon={icon} type={type} />
      ))}
    </ul>
  );
};

export default Categories;
