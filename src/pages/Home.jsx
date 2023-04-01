import { Categories, SearchBar } from "../components";
import { MdKeyboardBackspace } from "react-icons/md";
import AppBg from "../layouts/AppBg";
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import cartContext from "../context/cartContext";

const Home = () => {
  const { cart } = useContext(cartContext);
  return (
    <AppBg>
      <header className="flex justify-between text-2xl text-white cursor-pointer">
        <Link to="/">
          <MdKeyboardBackspace />
        </Link>
        <Link to="/cart" className="relative">
          <BsCart4 />
          <div
            className={
              cart.length
                ? "absolute top-0 p-1 rounded-full -right-1 bg-gold"
                : "hidden"
            }
          ></div>
        </Link>
      </header>
      <section className="my-6 mb-8 space-y-7">
        <p className="header-text-gradient gradient-animation">
          Welcome to GT Lounge online menu service. Enjoy!
        </p>
        <SearchBar />
      </section>
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
