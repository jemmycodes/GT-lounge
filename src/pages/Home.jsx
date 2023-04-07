import { Categories, SearchBar } from "../components";
import { MdKeyboardBackspace } from "react-icons/md";
import AppBg from "../layouts/AppBg";
import { Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useApp } from "../context/AppContext";
import { useLanguage } from "../context/LanguageContext";
import { useUpdateSearch } from "../context/SearchContext";
import { useEffect } from "react";

const Home = () => {
  const { data, language } = useLanguage();
  const { cart } = useApp();
  const navigate = useNavigate();
  const pathname = useMatch("menu");
  const path = language === "english" ? "food" : "yemek";

  const { searchText, updateSearchText } = useUpdateSearch();
  useEffect(() => {
    pathname && navigate(`/menu/${path}`);
  }, []);
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
              cart.length > 0
                ? "absolute top-0 p-1 rounded-full -right-1 bg-gold"
                : "hidden"
            }
          ></div>
        </Link>
      </header>
      <section className="my-6 mb-8 space-y-7">
        <p className="header-text-gradient gradient-animation">
          {data?.home?.welcome}
        </p>
        <SearchBar
          searchText={searchText}
          updateSearchText={updateSearchText}
        />
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
