import { all, call } from "redux-saga/effects";

import { commitsSagas } from "./commits/commits.saga";

export default function* rootSaga() {
  yield all([call(commitsSagas)]);
}
