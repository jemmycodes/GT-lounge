import logo from "../../assets/logo.svg";
import manAtBar from "../../assets/man-at-bar.svg";
import girlAtBar from "../../assets/girl-at-bar.svg";
import { radioData } from "../../constants/appData";
import { useState } from "react";
import { RadioBtns } from "..";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function SplashScreenBg() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { updateLanguage, proceedToShowMenu, language } = useLanguage();

  const handleShowMenu = () => {
    if (!language) return;
    setShowMenu((showMenu) => !showMenu);
    // proceedToShowMenu();
    setTimeout(() => proceedToShowMenu(), 550);
  };

  return (
    <section
      className={`bg-bgBlack text-yellow-500 h-full overflow-hidden flex flex-col justify-between items-center pt-10 bg-center bg-no-repeat ${
        !showMenu ? "bg-club-bg-splash-screen" : "bg-bar-bg"
      }`}
    >
      <div className="splash-bg-blur absolute top-4 right-0 overflow-hidden"></div>

      <figure className="animate-slideAndScale transalate-x-1/2">
        <img src={logo} alt="" width={150} height={50} />
      </figure>
      <figure className="overflow-hidden  w-full flex absolute top-1/2 -translate-y-[40%] justify-between">
        <img
          src={manAtBar}
          alt="Man drinking at a bar"
          className={`overflow-hidden custom-animation-classes ${
            !showMenu ? "animate-slideInFromLeft" : "animate-slideOutToleft"
          }`}
        />
        <img
          src={girlAtBar}
          alt="Girl drinking at a bar"
          className={`overflow-hidden custom-animation-classes ${
            !showMenu ? "animate-slideInFromRight" : "animate-slideOutToRight"
          }`}
        />
      </figure>
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
                onLanguageChange={updateLanguage}
              />
            ))}
          </div>
          <button
            type="submit"
            className="bg-gold text-white text-lg py-2 rounded-3xl"
            onClick={handleShowMenu}
          >
            Proceed
          </button>
        </form>
      </hgroup>
    </section>
  );
}

export default SplashScreenBg;
