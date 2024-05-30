import {
  FETCH_SPACES_LIST_FAILURE,
  FETCH_SPACES_LIST_REQUEST,
  FETCH_SPACES_LIST_SUCCESS,
} from "./actionTypes";
import {
  FetchSpacesListFailure,
  FetchSpacesListFailurePayload,
  FetchSpacesListRequest,
  FetchSpacesListSuccess,
  FetchSpacesListSuccessPayload,
} from "./types";

export const fetchSpacesListRequest = (): FetchSpacesListRequest => ({
  type: FETCH_SPACES_LIST_REQUEST,
});

export const fetchSpacesListSuccess = (
  payload: FetchSpacesListSuccessPayload
): FetchSpacesListSuccess => ({
  type: FETCH_SPACES_LIST_SUCCESS,
  payload,
});

export const fetchSpacesListFailure = (
  payload: FetchSpacesListFailurePayload
): FetchSpacesListFailure => ({
  type: FETCH_SPACES_LIST_FAILURE,
  payload,
});
