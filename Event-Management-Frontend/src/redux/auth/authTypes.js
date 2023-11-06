export const authActions = {
  SIGNUP_IN_PROGRESS: 0,
  SIGNUP_SUCCESS: 1,
  SIGNUP_FAILURE: 2,
  LOGIN_IN_PROGRESS: 3,
  LOGIN_SUCCESS: 4,
  LOGIN_FAILURE: 5,
  LOGOUT_IN_PROGRESS: 6,
  LOGOUT_SUCCESS: 7,
  LOGOUT_FAILURE: 8,
};

export const apiStatus = {
  IN_PROGRESS: 0,
  SUCCESS: 1,
  FAILURE: 2,
  IDLE: 3,
};

export const authOperation = {
  SIGNUP: 0,
  LOGIN: 1,
  LOGOUT: 2,
  INVALID: 3
};

export const authStatus = {
  LOGGED_IN: 0,
  NOT_LOGGED_IN: 1,
};
