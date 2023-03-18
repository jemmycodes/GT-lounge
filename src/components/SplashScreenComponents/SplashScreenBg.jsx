import logo from "../../assets/logo.svg";

function SplashScreenBg({ children }) {
  return (
    <section className="bg-bgBlack text-yellow-500 min-h-full flex flex-col justify-between items-center pt-10 bg-club-bg-splash-screen bg-center bg-no-repeat">
      <figure>
        <img src={logo} alt="logo" width={170} height={50} />
      </figure>
      {/* <div className="splash-bg-blur translate-x-28"></div> */}
      {children}
    </section>
  );
}

export default SplashScreenBg;
