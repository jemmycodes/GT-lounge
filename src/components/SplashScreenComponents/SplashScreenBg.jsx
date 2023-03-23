import logo from "../../assets/logo.svg";

function SplashScreenBg({ children }) {
  return (
    <section className="bg-bgBlack text-yellow-500 h-full overflow-hidden flex flex-col justify-between items-center pt-10 bg-club-bg-splash-screen bg-center bg-no-repeat">
      <div className="splash-bg-blur absolute top-4 right-0 overflow-hidden  top-4 translate-x-24"></div>
      {children}
    </section>
  );
}

export default SplashScreenBg;
