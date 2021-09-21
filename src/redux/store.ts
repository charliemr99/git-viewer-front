import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";
import { rootReducer } from "./root-reducer";

import { CommitsState } from "./commits/commits.types";

export type IState = {
  commits: CommitsState;
};

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export { store };
