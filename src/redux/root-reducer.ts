import { combineReducers } from "redux";

import commitsReducer from "./commits/commits.reducer";

export const rootReducer = combineReducers({
  commits: commitsReducer,
});
