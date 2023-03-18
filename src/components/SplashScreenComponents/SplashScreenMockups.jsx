import girlAtBar from "../../assets/girl-at-bar.svg";
import manAtBar from "../../assets/man-at-bar.svg";

function SplashScreenMockups() {
  return (
    <figure className="overflow-hidden">
      <img
        src={manAtBar}
        alt="Man drinking at a bar"
        className="absolute -translate-y-1/2 top-1/2 left-6 animate-slideInFromLeft"
      />
      <img
        src={girlAtBar}
        alt="Girl drinking at a bar"
        className="absolute -translate-y-1/2 top-1/2 right-6 animate-slideInFromRight"
      />
    </figure>
  );
}

export default SplashScreenMockups;
