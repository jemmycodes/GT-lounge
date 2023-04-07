import { AiOutlineSearch } from "react-icons/ai";
import { useLanguage } from "../../context/LanguageContext";

const SearchBar = ({ searchText, updateSearchText }) => {
  const { data } = useLanguage();

  return (
    <hgroup className="flex relative ">
      <input
        type="text"
        className=" w-full shadow-2xl bg-lang-card-color py-3 px-6 rounded-lg focus:border-gold focus:border-2 focus:outline-none text-gold"
        placeholder={data.home.search}
        value={searchText}
        onChange={(e) => updateSearchText(e.target.value)}
      />
      <AiOutlineSearch className="text-gold right-4 top-1/2 -translate-y-1/2 font-bold absolute text-xl" />
    </hgroup>
  );
};

export default SearchBar;
