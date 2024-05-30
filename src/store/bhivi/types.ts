import {
  FETCH_SPACES_LIST_FAILURE,
  FETCH_SPACES_LIST_REQUEST,
  FETCH_SPACES_LIST_SUCCESS,
} from "./actionTypes";

export interface ISpaceList {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    1: {
      value: number;
      message: string;
    };
    10: {
      value: number;
      message: string;
    };
  };
  manager_id: number | null;
  can_edit?: boolean;
}

export interface FetchSpacesListSuccessPayload {
  data: ISpaceList[];
  success: boolean;
  msg: string;
}

export interface FetchSpacesListFailurePayload {
  success: boolean;
  msg: string;
}

export interface FetchSpacesListRequest {
  type: typeof FETCH_SPACES_LIST_REQUEST;
}

export interface FetchSpacesListSuccess {
  type: typeof FETCH_SPACES_LIST_SUCCESS;
  payload: FetchSpacesListSuccessPayload;
}

export interface FetchSpacesListFailure {
  type: typeof FETCH_SPACES_LIST_FAILURE;
  payload: FetchSpacesListFailurePayload;
}

export type BhiviActions =
  | FetchSpacesListRequest
  | FetchSpacesListSuccess
  | FetchSpacesListFailure;
