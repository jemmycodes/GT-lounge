import { menuData } from "../../../constants/appData";
import { Category } from "../../index";

const Categories = () => {
  return (
    <>
      <p className="text-gold text-xl font-semibold mb-2">Categories</p>
      <ul className="flex gap-5  overflow-x-scroll ">
        {menuData.map(({ type, icon }) => (
          <Category key={type} icon={icon} type={type} />
        ))}
      </ul>
    </>
  );
};

export default Categories;
