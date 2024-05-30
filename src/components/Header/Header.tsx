import { CallIcon, Logo } from "../../assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-right">
          <img src={Logo} className="main-logo" alt="logo" />
        </div>
        <div className="header-left">
          <div className="call-logo">
            <img src={CallIcon} alt="call-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
