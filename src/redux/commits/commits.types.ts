import { ICommit, IGetCommitsActionProps } from "../../types/commits";

export type CommitsFailure = "REPOSITORY_NOT_FOUND";

export type CommitsState = {
  commits: ICommit[] | null;
  isLoading: boolean;
  failure: any | null;
};

export type GetCommitsAction = {
  type: "GET_COMMITS:START";
  payload: IGetCommitsActionProps;
};

export type SaveCommitsAction = {
  type: "GET_COMMITS:FINISH";
  data: ICommit[];
};

export type ReportCommitsFailureAction = {
  type: "REPORT_FAILURE";
  failure: any;
};

export type CommitsAction =
  | GetCommitsAction
  | SaveCommitsAction
  | ReportCommitsFailureAction;
