import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const init = {};

const store = createStore(rootReducer, init);

export default store;
