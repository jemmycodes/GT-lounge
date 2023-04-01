import { useContext } from "react";
import { MenuCard } from "../components";
import { foodItems } from "../constants/appData";
import cartContext from "../context/cartContext";

const Menu = () => {
  const { searchText } = useContext(cartContext);

  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const menu = filteredItems.map(({ name, id, image, description, price }) => (
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
      {menu.length ? (
        menu
      ) : (
        <p className="text-gold text-center">No items Found!</p>
      )}
    </ul>
  );
};
export default Menu;
