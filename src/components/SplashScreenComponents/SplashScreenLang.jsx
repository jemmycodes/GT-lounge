import { useEffect, useState } from "react";
import { RadioBtns } from "..";
import { radioData } from "../../constants/appData";

function SplashScreenLang({ onShowMenu, showMenu }) {
  const [language, setLanguage] = useState("turkish");

  useEffect(() => localStorage.setItem("language", language), [language]);

  return (
    <hgroup
      className={
        !showMenu ? "language-card bottom-0 absolute" : "language-card-outro"
      }
    >
      <div className="splash-bg-blur absolute  -bottom-4 -left-28 overflow-hidden "></div>
      <h1 className="text-white text-base text-center">
        Choose a language to continue
      </h1>
      <form
        className="flex  flex-col gap-16"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          {radioData.map(({ id, value }) => (
            <RadioBtns
              language={language}
              id={id}
              key={id}
              value={value}
              onLanguageChange={() => setLanguage(id)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-gold text-white text-lg py-2 rounded-3xl"
          onClick={onShowMenu}
        >
          Proceed
        </button>
      </form>
    </hgroup>
  );
}
export default SplashScreenLang;
