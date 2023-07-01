import { combineReducers, createStore } from "redux";
import ItemReducer from "./reducers/ItemReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
    Items:ItemReducer, User: UserReducer
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;