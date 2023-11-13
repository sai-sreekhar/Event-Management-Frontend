import { API_V1_BASE_URL } from "../../constants";
import { eventActions } from "./eventTypes";

const getAllEventsInProgress = () => {
  return {
    type: eventActions.GET_ALL_EVENTS_IN_PROGRESS,
  };
};

const getAllEventsSuccess = (events) => {
  return {
    type: eventActions.GET_ALL_EVENTS_SUCCESS,
    payload: { events },
  };
};

const getAllEventsFailure = (error) => {
  return {
    type: eventActions.GET_ALL_EVENTS_FAILURE,
    payload: { error },
  };
};

const getAllEvents = () => {
  return async (dispatch, getState) => {
    window.state = getState();
    dispatch(getAllEventsInProgress());
    try {
      const response = await fetch(`${API_V1_BASE_URL}/events`);
      const data = await response.json();
      if (data.status === "success") {
        dispatch(getAllEventsSuccess(data.data.events));
      } else {
        dispatch(getAllEventsFailure(data.data.errorDesc));
      }
    } catch (error) {
      dispatch(getAllEventsFailure(error.message));
    }
  };
};

export { getAllEvents };
