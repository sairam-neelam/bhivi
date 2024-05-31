import { useSelector } from "react-redux";
import { Arrow } from "../../assets";
import "./SpaceListing.css";
import { spacesListDataSelector } from "../../store/bhivi/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSpacesListRequest } from "../../store/bhivi/actions";
import SpaceCard from "../SpaceCard/SpaceCard";
import { LISTING_TITLE } from "./constants";

function SpaceListing() {
  const dispatch = useDispatch();
  const spacesData = useSelector(spacesListDataSelector);

  useEffect(() => {
    dispatch(fetchSpacesListRequest());
  }, []);

  return (
    <div className="space-listing">
      <div className="space-listing-header">
        <h1 className="title">{LISTING_TITLE}</h1>
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>
      <div className="spaces-list">
        {spacesData?.data?.map((item) => (
          <SpaceCard key={item?.id} details={item} />
        ))}
      </div>
    </div>
  );
}

export default SpaceListing;
