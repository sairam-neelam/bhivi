import { Reducer } from "redux";
import { BhiviActions, FetchSpacesListSuccessPayload } from "./types";
import {
  FETCH_SPACES_LIST_FAILURE,
  FETCH_SPACES_LIST_REQUEST,
  FETCH_SPACES_LIST_SUCCESS,
} from "./actionTypes";
import { RESPONSE } from "./constants";

export interface IBhivi {
  spacesList: FetchSpacesListSuccessPayload;
}

const initialState: IBhivi = {
  spacesList: {
    data: [],
    success: false,
    msg: "",
  },
};

const bhiviReducer: Reducer<IBhivi, BhiviActions> = (
  state = initialState,
  action: BhiviActions
) => {
  switch (action.type) {
    case FETCH_SPACES_LIST_REQUEST:
      return {
        ...state,
      };
    case FETCH_SPACES_LIST_SUCCESS:
      return {
        ...state,
        spacesList: {
          data: RESPONSE,
          success: true,
          msg: "Success",
        },
      };
    case FETCH_SPACES_LIST_FAILURE:
      return {
        ...state,
        spacesList: {
          data: [],
          success: false,
          msg: "Error",
        },
      };
    default:
      return state;
  }
};

export default bhiviReducer;
