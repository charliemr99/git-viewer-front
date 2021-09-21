import { ICommit, IGetCommitsActionProps } from "../../types/commits";
import {
  GetCommitsAction,
  ReportCommitsFailureAction,
  SaveCommitsAction,
} from "./commits.types";

export const getCommits = (
  payload: IGetCommitsActionProps
): GetCommitsAction => ({
  type: "GET_COMMITS:START",
  payload: payload,
});

export const saveCommits = (data: ICommit[]): SaveCommitsAction => ({
  type: "GET_COMMITS:FINISH",
  data: data,
});

export const reportCommitsFailure = (
  failure: any
): ReportCommitsFailureAction => ({
  type: "REPORT_FAILURE",
  failure: failure,
});
