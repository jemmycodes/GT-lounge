import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const { Provider } = SearchContext;

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (text) => {
    setSearchText(text);
  };
  return (
    <Provider value={{ searchText, updateSearchText }}>{children}</Provider>
  );
};

const useUpdateSearch = () => useContext(SearchContext);
export { SearchProvider, useUpdateSearch };
