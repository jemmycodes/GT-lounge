import { menuData } from "../../../constants/appData";
import { Category } from "../../index";

const Categories = () => {
  return (
    <ul className="flex gap-5  overflow-x-scroll scrollbar-hide">
      {menuData.map(({ type, icon }) => (
        <Category key={type} icon={icon} type={type} />
      ))}
    </ul>
  );
};

export default Categories;
