import { Categories, SearchBar } from "../components";
import { MdKeyboardBackspace } from "react-icons/md";
import AppBg from "../layouts/AppBg";
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Home = () => {
  return (
    <AppBg>
      <header className="text-gray-600  text-2xl cursor-pointer flex justify-between">
        <MdKeyboardBackspace />
        <Link to="/cart">
          <BsCart4 />
        </Link>
      </header>
      <section className="my-6 mb-8 space-y-7">
        <p className="text-white text-4xl mt-4 max-w-[280px] font-semibold">
          Lorem ipsum dolor sit amet.
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
