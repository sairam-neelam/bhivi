import { Arrow } from "../../assets";
import "./Amenities.css";

function Amenities() {
  return (
    <div className="amenities">
      <div className="amenities-header">
        <h1>Why Choose us?</h1>
        <img src={Arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default Amenities;
