import { combineReducers, createStore } from "redux";
import { listReducer, TItem } from "./list";

export type TStore = {
    list: TItem[]
}

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

export const store = createStore(
    combineReducers({
        list: listReducer
    }),
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
)