import { MenuCard } from "../components";

import { useLanguage } from "../context/LanguageContext";
import { useUpdateSearch } from "../context/SearchContext";
import useSearch from "../hooks/useSearch";

const Menu = () => {
  const { data } = useLanguage();
  const { searchText } = useUpdateSearch();

  const { filteredItems } = useSearch(searchText, data.menu);

  const menu = filteredItems.map(({ id, image, description, price, name }) => (
    <MenuCard
      key={id}
      id={id}
      image={image}
      description={description}
      price={price}
      name={name}
    />
  ));

  return (
    <ul className="grid my-8 grid-cols-1 gap-7 ">
      {menu.length > 0 ? (
        menu
      ) : (
        <p className="text-gold text-center ">
          {`"${searchText}" is not available`}
        </p>
      )}
    </ul>
  );
};
export default Menu;
