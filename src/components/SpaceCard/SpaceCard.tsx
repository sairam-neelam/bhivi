import { Chevron, Direction, Workspace } from "../../assets";
import { ISpaceList } from "../../store/bhivi/types";
import "./SpaceCard.css";
import { IMAGE_URL, SPACE_CARD } from "./constants";

interface SpaceCardProps {
  details: ISpaceList;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ details }) => {
  return (
    <div className="space-card">
      <div className="card-header">
        <p className="space-name">{details?.name}</p>
        <div className="direction">
          <img className="direction-logo" src={Direction} alt="direction" />
          <p className="distance">{SPACE_CARD.DISTANCE}</p>
        </div>
      </div>
      <div className="image-container">
        <img
          className="space-image"
          src={IMAGE_URL + details?.images[0]}
          alt="space"
        />
        <div className="badge">
          <img src={Workspace} alt="workspace-logo" />
          <p className="badge-text">{SPACE_CARD.WORKSPACE}</p>
        </div>
      </div>
      <div className="price-card-container">
        <div className="price-card">
          <div className="price-detail">
            <p className="price-label">{SPACE_CARD.DAY_PASS}</p>
            <p className="price">
              ₹ {details?.day_pass_price}
              <span className="price-label">/Day</span>
            </p>
          </div>
          <div>
            <img className="op-30" src={Chevron} alt="chevron" />
            <img className="op-60" src={Chevron} alt="chevron" />
            <img src={Chevron} alt="chevron" />
          </div>
        </div>
        <div className="price-card bulk-price-card">
          <div className="price-detail">
            <p className="price-label">{SPACE_CARD.BULK_PASS}</p>
            <p className="price">
              ₹{" "}
              {details?.day_pass_price * 10 -
                details?.day_pass_price *
                  10 *
                  (details?.day_pass_discounts_percentage["10"].value / 100)}
              <span className="price-label">/10 Days</span>
            </p>
          </div>
          <div>
            <img className="op-30" src={Chevron} alt="chevron" />
            <img className="op-60" src={Chevron} alt="chevron" />
            <img src={Chevron} alt="chevron" />
          </div>
          <div className="discount-container">
            {details?.day_pass_discounts_percentage["10"].value}% discount
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
