import { Categories } from "../components";
import { MdKeyboardBackspace } from "react-icons/md";
import AppBg from "../layouts/AppBg";
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Home = () => {
  return (
    <AppBg>
      <header className="text-gold mb-4 text-2xl cursor-pointer flex justify-between">
        <MdKeyboardBackspace />
        <Link to="/cart">
        <BsCart4 />
        </Link>
      </header>
      <nav>
        <Categories />
      </nav>
      <section>
        <Outlet />
      </section>
    </AppBg>
  );
};

export default Home;
