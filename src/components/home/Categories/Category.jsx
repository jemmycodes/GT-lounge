import { NavLink } from "react-router-dom";
import food from "../../../assets/food.svg";
import cognac from "../../../assets/cognac.svg";
import beer from "../../../assets/beer.svg";
import wine from "../../../assets/wine.svg";
import { useMemo } from "react";

const Category = ({ type, icon }) => {
  const icons = useMemo(
    () => ({
      food,
      wine,
      cognac,
      beer,
    }),
    []
  );

  return (
    <NavLink
      to={`${type.toLowerCase()}`}
      className={({ isActive, isPending }) =>
        isActive ? "menu-link active-link" : "menu-link "
      }
    >
      <img src={icons[icon]} alt="" height={20} width={20} />
      <p>{type}</p>
    </NavLink>
  );
};

export default Category;
