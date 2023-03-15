import { useState, useEffect } from "react";
import { ChooseLang, ChooseMenu, SplashScreenLogo } from "..";

function SplashScreenBg() {
  const [showLang, setShowLang] = useState(true);

  return (
    <>
      <div className="top-blur-gradient -top-[100px] w-full left-0 right-0 absolute p-10"></div>
      <section className="bg-splash-screen  h-full bg-center bg-cover bg-no-repeat min-w-full gap-5 flex flex-col items-center justify-between">
        <SplashScreenLogo />

        <ChooseLang setShowLang={setShowLang} language={showLang} />

        <ChooseMenu language={showLang} />
      </section>
    </>
  );
}

export default SplashScreenBg;
