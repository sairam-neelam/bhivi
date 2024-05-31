import { AppView, Arrow } from "../../assets";
import "./FooterBanner.css";
import { APP_STORE, FOOTER_BANNER, GOOGLE_PLAY } from "./constants";

const FooterBanner = () => {
  return (
    <div className="footer-banner">
      <div className="footer-banner-header">
        <h1 className="title">{FOOTER_BANNER.TITLE}</h1>
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>

      <div>
        <div className="app-view-container">
          <div className="app-desc">
            <p className="desc">{FOOTER_BANNER.DESC}</p>
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
