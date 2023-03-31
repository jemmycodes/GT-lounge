import { Categories, SearchBar } from "../components";
import { MdKeyboardBackspace } from "react-icons/md";
import AppBg from "../layouts/AppBg";
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <AppBg>
      <header className="flex justify-between text-2xl text-gray-600 cursor-pointer">
        <Link to="/">
          <MdKeyboardBackspace />
        </Link>
        <Link to="/cart" className="relative">
          <BsCart4 />

          <div className="absolute top-0 p-1 rounded-full -right-1 bg-gold"></div>
        </Link>
      </header>
      <section className="my-6 mb-8 space-y-7">
        <p className="header-text-gradient">
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
