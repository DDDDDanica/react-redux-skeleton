import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { globalSetting, errors } from "./reducers";
import { kpi } from "./pages/user/reducers";

const defaultStore = { errors, kpi, globalSetting };

const rootReducer = combineReducers(defaultStore);
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

export default createStoreWithMiddleware(rootReducer);
