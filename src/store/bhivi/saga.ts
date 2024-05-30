import { all, put, takeLatest } from "redux-saga/effects";
import { FetchSpacesListRequest } from "./types";
import { fetchSpacesListSuccess, fetchSpacesListFailure } from "./actions";
import { FETCH_SPACES_LIST_REQUEST } from "./actionTypes";
import { RESPONSE } from "./constants";

function* fetchSpacesListSaga(action: FetchSpacesListRequest): any {
  try {
    const response = RESPONSE;
    yield put(
      fetchSpacesListSuccess({
        data: response,
        success: true,
        msg: "Success",
      })
    );
  } catch (e) {
    yield put(
      fetchSpacesListFailure({
        success: false,
        msg: "Error",
      })
    );
  }
}

export function* repoSagaWatcher() {
  yield all([takeLatest(FETCH_SPACES_LIST_REQUEST, fetchSpacesListSaga)]);
}
