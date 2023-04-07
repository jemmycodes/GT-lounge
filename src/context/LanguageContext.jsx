import { createContext, useContext, useEffect, useRef, useState } from "react";
import languageData from "../../language.json";

const LanguageContext = createContext();
const { Provider } = LanguageContext;

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState();
  const [data, setData] = useState("english");
  const [proceed, setProceed] = useState(false);

  const updateLanguage = (lang) => {
    setLanguage(lang);
  };

  const proceedToShowMenu = () => {
    setProceed(true);
  };
  const fetchedLanguage = useRef(false);

  useEffect(() => {
    if (!fetchedLanguage.current) {
      const lang = localStorage.getItem("gt-lang");
      if (lang) {
        proceedToShowMenu();
        setLanguage(lang);
      }
      fetchedLanguage.current = true;
    } else {
      localStorage.setItem("gt-lang", language);
      setData(languageData[language]);
    }
  }, [language, data]);

  return (
    <Provider
      value={{ language, proceed, updateLanguage, proceedToShowMenu, data }}
    >
      {children}
    </Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);
export { LanguageProvider, useLanguage };
