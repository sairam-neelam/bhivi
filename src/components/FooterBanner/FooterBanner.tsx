import { AppView, Arrow } from "../../assets";
import "./FooterBanner.css";
import { APP_STORE, GOOGLE_PLAY } from "./constants";

const FooterBanner = () => {
  return (
    <div className="footer-banner">
      <div className="footer-banner-header">
        <h1 className="title">Download our app now</h1>
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>

      <div>
        <div className="app-view-container">
          <div className="app-desc">
            <p className="desc">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="store-list">
              <img src={GOOGLE_PLAY} alt="google-play" />
              <img src={APP_STORE} alt="app-store" />
            </div>
          </div>
          <img className="app-view-image" src={AppView} alt="app-view" />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
