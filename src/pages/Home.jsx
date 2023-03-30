import { Categories, SearchBar } from "../components";
import { MdKeyboardBackspace } from "react-icons/md";
import AppBg from "../layouts/AppBg";
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Alert from "../components/interface/Alert";

const Home = () => {
  return (
    <AppBg>
      <Alert />
      <header className="flex justify-between text-2xl text-gray-600 cursor-pointer">
        <MdKeyboardBackspace />
        <Link to="/cart">
          <span className="relative bg-red-400 ">
            <BsCart4 />
            <div className="absolute p-1 rounded-full top-6 -right-7 bg-gold"></div>
          </span>
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
