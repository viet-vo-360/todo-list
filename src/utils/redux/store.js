import { createStore } from "redux";
import rootReducer from "./reducers";
import { FORM_INITIAL_STATE } from "../../app/constants/INITIAL_STATE";

export default createStore(rootReducer, FORM_INITIAL_STATE);
