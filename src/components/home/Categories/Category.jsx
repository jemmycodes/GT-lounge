import { NavLink } from "react-router-dom";

const Category = ({ type, icon }) => {
  return (
    <NavLink className="menu-link active-link">
      <img src={icon} alt="" height={20} width={20} />
      <p>{type}</p>
    </NavLink>
  );
};

export default Category;
