import { Categories } from "../components";
import { MdKeyboardBackspace } from "react-icons/md";
import AppBg from "../layouts/AppBg";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <AppBg>
      <MdKeyboardBackspace className="text-gold text-3xl cursor-pointer" />
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
