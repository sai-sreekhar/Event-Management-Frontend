import { apiStatus, eventActions } from "./eventTypes";

const initialState = {
  events: [],
  apiStatus: apiStatus.IDLE,
  errorReason: null,
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case eventActions.GET_ALL_EVENTS_IN_PROGRESS:
      return {
        ...state,
        apiStatus: apiStatus.IN_PROGRESS,
      };
    case eventActions.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        apiStatus: apiStatus.SUCCESS,
        events: action.payload.events,
      };
    case eventActions.GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        apiStatus: apiStatus.FAILURE,
        errorReason: action.payload.error,
      };
    default:
      return state;
  }
}
