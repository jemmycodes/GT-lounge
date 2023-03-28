import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <hgroup className="flex relative ">
      <input
        type="text"
        className=" w-full bg-lang-card-color py-3 px-6 rounded-lg focus:border-gold focus:border-2 focus:outline-none text-gold"
        placeholder="Search..."
      />
      <AiOutlineSearch className="text-gold right-4 top-1/2 -translate-y-1/2 font-bold absolute text-xl" />
    </hgroup>
  );
};

export default SearchBar;
