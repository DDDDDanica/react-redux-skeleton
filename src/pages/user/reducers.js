import { FETCH_USER_INFO } from "./actions";

const initial = {
  userId: ""
};

export const kpi = (state = initial, action) => {
  let newState = state;
  switch (action.type) {
    case FETCH_USER_INFO:
      const userData = action.payload;
      let userId = userData[0]["user_id"];
      newState = { ...state, userId };
      break;
  }
  return newState;
};
