import { NavLink } from "react-router-dom";

const Category = ({ type, icon }) => {
  return (
    <NavLink
      to={`${type.toLowerCase()}`}
      className={({ isActive, isPending }) =>
        isActive ? "menu-link active-link" : "menu-link "
      }
    >
      <img src={icon} alt="" height={20} width={20} />
      <p>{type}</p>
    </NavLink>
  );
};

export default Category;
