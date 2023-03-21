import { useState } from "react";
import { RadioBtns } from "../index";

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
          <RadioBtns
            id="english"
            value="English"
            onClick={() => setLanguage("english")}
          />
          <RadioBtns
            id="turkish"
            value="Turkish"
            onClick={() => setLanguage("turkish")}
          />
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
