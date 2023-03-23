import girlAtBar from "../../assets/girl-at-bar.svg";
import manAtBar from "../../assets/man-at-bar.svg";

function SplashScreenMockups() {
  return (
    <figure className="max-w-full overflow-hidden">
      <img
        src={manAtBar}
        alt="Man drinking at a bar"
        className="animate-slideInFromLeft overflow-hidden custom-animation-classes"
      />
      <img
        src={girlAtBar}
        alt="Girl drinking at a bar"
        className=" animate-slideInFromRight overflow-hidden custom-animation-classes "
      />
    </figure>
  );
}

export default SplashScreenMockups;
