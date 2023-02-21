import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import { TItem, listReducer } from "./list";
import { TModalState, modalReducer } from "./modal";
import { userDataReducer, TUserState } from "./userData";

export type TStore = {
  list: TItem[];
  modal: TModalState;
  userData: TUserState;
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

export const sagaMiddleWare = createSagaMiddleware();
export const configureStore = (preloadedState: {}) =>
  createStore(
    combineReducers({
      list: listReducer,
      modal: modalReducer,
      userData: userDataReducer,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleWare))
  );

export const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = configureStore({});

sagaMiddleWare.run(rootSaga);
