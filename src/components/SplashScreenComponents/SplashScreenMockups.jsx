import girlAtBar from "../../assets/girl-at-bar.svg";
import manAtBar from "../../assets/man-at-bar.svg";

function SplashScreenMockups({ showMenu }) {
  return (
    <figure className="max-w-full overflow-hidden">
      <img
        src={manAtBar}
        alt="Man drinking at a bar"
        className={`overflow-hidden custom-animation-classes ${
          !showMenu ? "animate-slideInFromLeft" : "animate-slideOutToleft"
        }`}
      />
      <img
        src={girlAtBar}
        alt="Girl drinking at a bar"
        className={`overflow-hidden custom-animation-classes ${
          !showMenu ? "animate-slideInFromRight" : "animate-slideOutToRight"
        }`}
      />
    </figure>
  );
}

export default SplashScreenMockups;
