import { ChooseLanguage, ChooseMenu } from "../components";
import { useLanguage } from "../context/LanguageContext";

const SplashScreen = () => {
  const { language, proceed } = useLanguage();

  return (
    <>
      {proceed && <ChooseMenu />}
      {!proceed && <ChooseLanguage />}
    </>
  );
};

export default SplashScreen;
