import { useState } from "react";
import {
  SplashScreenBg,
  SplashScreenLogo,
  SplashScreenMenu,
  SplashScreenMockups,
  SplashScreenLang,
} from "../components";

function SplashScreen() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <SplashScreenBg>
      {!showMenu ? (
        <>
          <SplashScreenLogo />
          <SplashScreenMockups />
          <SplashScreenLang showMenu={showMenu} onShowMenu={handleShowMenu} />
        </>
      ) : (
        <SplashScreenMenu />
      )}
    </SplashScreenBg>
  );
}

export default SplashScreen;
