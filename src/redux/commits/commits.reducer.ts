import { CommitsState, CommitsAction } from "./commits.types";

const INITIAL_STATE: CommitsState = {
  isLoading: false,
  failure: null,
  commits: null,
};

const commitsReducer = (
  state = INITIAL_STATE,
  action: CommitsAction
): CommitsState => {
  switch (action.type) {
    case "GET_COMMITS:START":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_COMMITS:FINISH":
      return {
        ...state,
        isLoading: false,
        commits: action.data,
      };
    case "REPORT_FAILURE":
      return {
        ...state,
        isLoading: false,
        failure: action.failure,
      };
    default:
      return state;
  }
};

export default commitsReducer;
