function ChooseLang() {
  return (
    <section className="choose-language-card w-full flex flex-col justify-center gap-6 p-5 text-white">
      <h1 className="text-3xl font-serif text-center w-full">
        Choose Language
      </h1>
      <form className="flex flex-col justify-between gap-24 text-2xl ">
        <div className="flex justify-between">
          <div>
            <input type="radio" id="english" />
            <label htmlFor="english">English</label>
          </div>
          <div>
            <input type="radio" id="turkish" />
            <label htmlFor="turkish">Turkish</label>
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-orange py-3 mb-5 px-10 rounded-lg min-w-full"
        >
          Proceed
        </button>
      </form>
    </section>
  );
}

export default ChooseLang;
