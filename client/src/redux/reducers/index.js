import { combineReducers } from "redux";
import { carsReducer, detailCarsReducer, filterReducer, buttonReducer } from "./carsReducer";
const reducers = combineReducers({
  carsData: carsReducer,
  detail: detailCarsReducer,
  carsFilter : filterReducer,
  btn : buttonReducer
});
export default reducers;