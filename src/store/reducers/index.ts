import { combineReducers } from "redux";
import calculateReducer from "./calculateReducer";

const reducers = combineReducers({
    calculate: calculateReducer
})

export default reducers
export type State = ReturnType<typeof reducers>