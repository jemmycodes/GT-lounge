import { ChooseLang, SplashScreenLogo } from "..";

function SplashScreenBg() {
  return (
    <>
      <div className="top-blur-gradient -top-[100px] w-full left-0 right-0 absolute p-10"></div>
      <section className="bg-splash-screen viewport-height h-screen bg-center bg-cover bg-no-repeat min-w-full gap-5 flex flex-col items-center justify-between">
        <SplashScreenLogo />
        <ChooseLang />
      </section>
    </>
  );
}

export default SplashScreenBg;
