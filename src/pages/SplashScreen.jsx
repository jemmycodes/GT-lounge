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
    <SplashScreenBg showMenu={showMenu}>
      <SplashScreenLogo />
      <SplashScreenMockups showMenu={showMenu} />
      <SplashScreenLang showMenu={showMenu} onShowMenu={handleShowMenu} />
      <SplashScreenMenu showMenu={showMenu} />
    </SplashScreenBg>
  );
}

export default SplashScreen;
