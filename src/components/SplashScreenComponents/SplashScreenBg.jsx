import logo from "../../assets/logo.svg";

function SplashScreenBg({ children }) {
  return (
    <section className="bg-bgBlack text-yellow-500 min-h-full overflow-hidden flex flex-col justify-between items-center pt-10 bg-club-bg-splash-screen bg-center bg-no-repeat">
      <figure className="animate-slideAndScale scale-100 delay-1000">
        <img src={logo} alt="logo" width={170} height={50} />
      </figure>
      <div className="splash-bg-blur  overflow-hidden -translate-y-48  translate-x-[60%] "></div>
      {children}
    </section>
  );
}

export default SplashScreenBg;