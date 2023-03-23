import { useState } from "react";
import { RadioBtns } from "..";

const data = [
  { value: "English", id: "english" },
  { value: "Turkish", id: "turkish" },
];

function SplashScreenLang() {
  const [language, setLanguage] = useState("turkish");

  return (
    <hgroup className="language-card ">
      <div className="splash-bg-blur absolute bottom-0 -left-36 overflow-hidden "></div>
      <h1 className="text-white text-lg text-center">
        Choose a language to continue
      </h1>
      <form className="flex  flex-col gap-20">
        <div>
          {data.map(({ id, value }) => (
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
        >
          Proceed
        </button>
      </form>
    </hgroup>
  );
}
export default SplashScreenLang;
