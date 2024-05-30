import { combineReducers } from "redux";
import bhiviReducer from "./bhivi/reducers";

const rootReducer = combineReducers({
  bhivi: bhiviReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
