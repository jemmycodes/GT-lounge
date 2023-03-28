import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

function MenuItems({ menu, icon }) {
  const href = menu.toLowerCase();
  return (
    <Link to={`menu/${href}`} className="menu-items-splash-screen">
      <div className="flex font-medium text-lg justify-between items-center gap-4">
        <span className="flex items-center gap-3">
          <img src={icon} alt="" width={50} height={50} />
          <h4>{menu}</h4>
        </span>
        <MdNavigateNext className="text-xl " />
      </div>
    </Link>
  );
}

export default MenuItems;
