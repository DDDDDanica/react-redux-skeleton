import { ADD_ERROR, REMOVE_ERROR } from "actions";
import { getYearOfToday } from "utils";

const initialSetting = {
  year: getYearOfToday()
};

export const errors = (state = [], action) => {
  switch (action.type) {
    case ADD_ERROR:
      return state.concat(action.payload);
    case REMOVE_ERROR:
      return state.filter(error => error !== action.payload); // good
  }
  return state;
};

export const globalSetting = (state = initialSetting) => {
  return state;
};
