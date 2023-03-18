import girlAtBar from "../../assets/girl-at-bar.svg";
import manAtBar from "../../assets/man-at-bar.svg";

function SplashScreenMockups() {
  return (
    <figure>
      <img
        src={manAtBar}
        alt="Man drinking at a bar"
        className="absolute -translate-y-1/2 top-1/2 left-0"
      />
      <img
        src={girlAtBar}
        alt="Girl drinking at a bar"
        className="absolute -translate-y-1/2 top-1/2 right-0"
      />
    </figure>
  );
}

export default SplashScreenMockups;
