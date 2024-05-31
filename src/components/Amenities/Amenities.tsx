import { Arrow } from "../../assets";
import "./Amenities.css";
import { AMENITIES } from "./constants";

function Amenities() {
  return (
    <div className="amenities">
      <div className="amenities-header">
        <h1 className="title">Why Choose us?</h1>
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>
      <div className="amenities-list">
        {AMENITIES.map((el) => (
          <div className="amenity-card" key={el.name}>
            <img className="amenity-logo" src={el.logo} alt={el.name} />
            <p className="amenity-name">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
