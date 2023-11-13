import { apiStatus, eventActions } from "./eventTypes";

const initialState = {
  events: [],
  apiStatus: apiStatus.IDLE,
  errorReason: null,
  eventDetails: {},
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case eventActions.GET_ALL_EVENTS_IN_PROGRESS:
      return {
        ...state,
        apiStatus: apiStatus.IN_PROGRESS,
        errorReason: null,
      };
    case eventActions.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        apiStatus: apiStatus.SUCCESS,
        events: action.payload.events,
        errorReason: null,
      };
    case eventActions.GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        apiStatus: apiStatus.FAILURE,
        errorReason: action.payload.error,
      };
    case eventActions.GET_EVENT_DETAILS_IN_PROGRESS:
      return {
        ...state,
        apiStatus: apiStatus.IN_PROGRESS,
        errorReason: null,
      };
    case eventActions.GET_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        apiStatus: apiStatus.SUCCESS,
        eventDetails: {
          ...state.eventDetails,
          [action.payload.eventId]: action.payload.eventDetails,
        },
        errorReason: null,
      };
    case eventActions.GET_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        apiStatus: apiStatus.FAILURE,
        errorReason: action.payload.error,
      };
    case eventActions.HOST_EVENT_IN_PROGRESS:
      return {
        ...state,
        apiStatus: apiStatus.IN_PROGRESS,
        errorReason: null,
      };
    case eventActions.HOST_EVENT_SUCCESS:
      return {
        ...state,
        apiStatus: apiStatus.SUCCESS,
        errorReason: null,
      };
    case eventActions.HOST_EVENT_FAILURE:
      return {
        ...state,
        apiStatus: apiStatus.FAILURE,
        errorReason: action.payload.error,
      };
    default:
      return state;
  }
}
