import "./LandingHeader.css";
import { LANDING_TEXT, LANDING_VIDEO } from "./constants";

const LandingHeader = () => {
  return (
    <div className="landing-header">
      <div className="landing-header-left">
        <h1 className="landing-desc">
          {LANDING_TEXT} <span>₹199/-!</span>
        </h1>
      </div>
      <div className="landing-header-right">
        <video className="landing-video" preload="true" autoPlay loop muted>
          <source src={LANDING_VIDEO} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LandingHeader;
