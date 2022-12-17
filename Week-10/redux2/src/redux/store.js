import { createStore } from "redux";
import stepReducer from "./stepReducer";

const store = createStore(stepReducer);

export default store;
