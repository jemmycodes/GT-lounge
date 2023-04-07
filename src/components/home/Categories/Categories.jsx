import { useLanguage } from "../../../context/LanguageContext";
import { Category } from "../../index";

const language = localStorage.getItem("language");

const Categories = () => {
  const { data } = useLanguage();
  return (
    <ul className="flex gap-5  overflow-x-scroll scrollbar-hide">
      {data.categories.map(({ type, icon }) => (
        <Category key={type} icon={icon} type={type} />
      ))}
    </ul>
  );
};

export default Categories;
