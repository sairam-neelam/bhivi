import { AppState } from "../rootReducer";
import { createSelector } from "reselect";

const spacesListData = (state: AppState) => state?.bhivi?.spacesList;

export const spacesListDataSelector = createSelector(
  spacesListData,
  (spacesListData) => spacesListData
);
