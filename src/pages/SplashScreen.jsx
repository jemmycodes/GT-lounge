import { SplashScreenBg } from "../components";
import SplashScreenMockups from "../components/SplashScreenComponents/SplashScreenMockups";
import SplashScreenLang from "../components/SplashScreenComponents/SplashScreenLang";

function SplashScreen() {
  return (
    <SplashScreenBg>
      <SplashScreenMockups />
      <SplashScreenLang />
    </SplashScreenBg>
  );
}

export default SplashScreen;
