import { Arrow } from "../../assets";
import "./SpaceListing.css";

function SpaceListing() {
  return (
    <div className="space-listing">
      <div className="space-listing-header">
        <h1 className="title">Over Space Overview</h1>
        <img src={Arrow} alt="arrow" />
      </div>
      <div className="spaces-list">list</div>
    </div>
  );
}

export default SpaceListing;
