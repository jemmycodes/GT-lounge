function SplashScreenBg({ children, showMenu }) {
  return (
    <section
      className={`bg-bgBlack text-yellow-500 h-full overflow-hidden flex flex-col justify-between items-center pt-10 bg-center bg-no-repeat ${
        !showMenu ? "bg-club-bg-splash-screen" : "bg-bar-bg"
      }`}
    >
      <div className="splash-bg-blur absolute top-4 right-0 overflow-hidden"></div>
      {children}
    </section>
  );
}

export default SplashScreenBg;
