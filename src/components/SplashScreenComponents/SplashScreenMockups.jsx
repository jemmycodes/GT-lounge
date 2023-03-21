import girlAtBar from "../../assets/girl-at-bar.svg";
import manAtBar from "../../assets/man-at-bar.svg";

function SplashScreenMockups() {
  return (
    <figure className="overflow-hidden">
      <img
        src={manAtBar}
        alt="Man drinking at a bar"
        className="absolute top-1/2 -translate-y-1/2 left-4"
      />
      <img
        src={girlAtBar}
        alt="Girl drinking at a bar"
        className="absolute  right-4 top-1/2 -translate-y-1/2"
      />
    </figure>
  );
}

export default SplashScreenMockups;
// className = "absolute";
