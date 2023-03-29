import { MenuCard } from "../components";
import { foodItems } from "../constants/appData";

const Menu = () => {
  return (
    <ul className="grid my-8 grid-cols-1 gap-7 ">
      {foodItems.map(({ name, id, image, description, price }) => (
        <MenuCard
          key={id}
          id={id}
          image={image}
          description={description}
          price={price}
          name={name}
        />
      ))}
    </ul>
  );
};
export default Menu;
