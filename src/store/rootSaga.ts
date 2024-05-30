import { all } from "redux-saga/effects";
import { repoSagaWatcher } from "./bhivi/saga";

export function* rootSaga() {
  yield all([repoSagaWatcher()]);
}
