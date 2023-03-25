import logo from "../../assets/logo.svg";

function SplashScreenLogo() {
  return (
    <figure className="animate-slideAndScale transalate-x-1/2">
      <img src={logo} alt="" width={150} height={50} />
    </figure>
  );
}

export default SplashScreenLogo;
