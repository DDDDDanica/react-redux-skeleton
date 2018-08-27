import { FETCH_USER_INFO } from "./actions";

const initial = {
  userId: ""
};

export const user = (state = initial, action) => {
  let newState = state;
  switch (action.type) {
    case FETCH_USER_INFO:
      let userId = action.payload;
      newState = { ...state, userId };
      break;
  }
  return newState;
};
