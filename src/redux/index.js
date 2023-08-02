import { combineReducers, compose, legacy_createStore } from "redux";
import serviceListReducer from "./serviceList";
import serviceAddReducer from "./serviceAdd";

const ReactReduDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configurStore() {
  return legacy_createStore(
    combineReducers({
      serviceList: serviceListReducer,
      serviceAdd: serviceAddReducer,
    }),
    compose (
        ReactReduDevTools,
    )
  );
}

export default configurStore;