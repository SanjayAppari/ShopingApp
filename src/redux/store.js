import { combineReducers, createStore } from "redux";
import ItemReducer from "./reducers/ItemReducer";

const rootReducer = combineReducers({
    Items:ItemReducer
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;