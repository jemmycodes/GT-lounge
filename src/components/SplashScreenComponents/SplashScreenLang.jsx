function SplashScreenLang() {
  return (
    <hrgoup className="language-card ">
      <div className="splash-bg-blur absolute bottom-0 -left-36 "></div>
      <h1 className="text-white text-lg text-center">
        Choose a language to continue
      </h1>
      <form className="flex  flex-col gap-12">
        <div>
          <div>
            <input
              type="radio"
              name="choose-lang"
              id="english"
              className="accent-gold"
              defaultChecked
            />
            <label id="english">English</label>
          </div>
          <div>
            <input
              id="turkish"
              type="radio"
              name="choose-lang"
              className="accent-gold"
            />
            <label id="turkish">Turkish</label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-gold text-white text-lg` py-2 rounded-3xl"
        >
          Proceed
        </button>
      </form>
    </hrgoup>
  );
}
export default SplashScreenLang;
