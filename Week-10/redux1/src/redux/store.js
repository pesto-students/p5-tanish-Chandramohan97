import { createStore } from "redux";
import lightReducer from "./lightReducer";

const store = createStore(lightReducer);

export default store;
