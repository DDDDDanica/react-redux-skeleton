import axios from "axios";
export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const actionPOST = (action, payload, URL) => {
  return dispatch => {
    return axios
      .post(URL, payload)
      .then(response => dispatchSuccess(dispatch, action, response.data))
      .catch(error => dispatchError(dispatch, action, error.message));
  };
};

export const actionGET = (action, payload, URL) => {
  return dispatch => {
    return axios
      .get(URL)
      .then(response => dispatchSuccess(dispatch, action, response.data))
      .catch(error => dispatchError(dispatch, action, error.message));
  };
};

export const actionPUT = (action, payload, URL) => {
  return dispatch => {
    return axios
      .put(URL, payload)
      .then(response => dispatchSuccess(dispatch, action, response.data))
      .catch(error => dispatchError(dispatch, action, error.message));
  };
};

export const action = (action, payload) => {
  return {
    type: action,
    payload: payload
  };
};

const dispatchSuccess = (dispatch, action, payload) => {
  dispatch({ type: action, payload: payload });
  return Promise.resolve(payload);
};

const dispatchError = (dispatch, action, error) => {
  const newError = new Error(error);
  newError.name = action; // By default, Error instances are given the name "Error" we change it
  dispatch({
    type: ADD_ERROR,
    payload: newError
  });
  throw error;
};
