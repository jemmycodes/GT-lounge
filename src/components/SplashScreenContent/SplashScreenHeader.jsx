import Logo from "../../assets/logo.png";

function SplashScreenHeader() {
  return (
    <figure>
      <img src={Logo} alt="App Logo" width={250} height={10} />
      <figcaption className="-mt-32 text-center text-4xl bg-gradient-to-b from-[#FF6838] to-[#FFFCFB] font-serif bg-clip-text ">
        GT LOUNGE
      </figcaption>
    </figure>
  );
}

export default SplashScreenHeader;
