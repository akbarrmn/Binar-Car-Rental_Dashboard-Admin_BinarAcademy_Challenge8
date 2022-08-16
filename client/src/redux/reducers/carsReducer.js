import { ActionTypes } from "../constants/action-types";
const intialState = {
  cars: [],
  carsSearch:[],
  button: ''
};

// Fetching Data Cars
export const carsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_DATA:
          return { ...state, cars: payload };
        default:
          return state;
    }
};

// Fetching Cars Detail
export const detailCarsReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.DETAIL_CARS:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_DETAIL_CARS:
        return {};
      default:
        return state;
    }
};

// Fetching Search Filter
export const filterReducer = (state = intialState, { type, payload }) => {
  switch (type) {
      case ActionTypes.CAR_SEARCH:
        return { ...state, carsSearch: payload };
      default:
        return state;
  }
};

// Fetching Button
export const buttonReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_BUTTON:
        return { ...state, button: payload };
      default:
        return state;
    }
};
