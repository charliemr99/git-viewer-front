import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getCommits } from "../../services/commits.service";
import { ICommit } from "../../types/commits";
import { reportCommitsFailure, saveCommits } from "./commits.actions";
import { CommitsFailure, GetCommitsAction } from "./commits.types";

export function* getCommitsAsync(action: GetCommitsAction) {
  const [commits, failure]: (ICommit[] | CommitsFailure)[] = yield call(
    getCommits,
    action.payload
  );
  if (failure) {
    yield put(reportCommitsFailure(failure as CommitsFailure));
  } else {
    yield put(saveCommits(commits as ICommit[]));
  }
}

export function* onGetCommitsStart() {
  yield takeLatest<GetCommitsAction>("GET_COMMITS:START", getCommitsAsync);
}

export function* commitsSagas() {
  yield all([call(onGetCommitsStart)]);
}
