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

const getEventDetailsInProgress = () => {
  return {
    type: eventActions.GET_EVENT_DETAILS_IN_PROGRESS,
  };
};

const getEventDetailsSuccess = (eventId, eventDetails) => {
  return {
    type: eventActions.GET_EVENT_DETAILS_SUCCESS,
    payload: { eventId, eventDetails },
  };
};

const getEventDetailsFailure = (error) => {
  return {
    type: eventActions.GET_EVENT_DETAILS_FAILURE,
    payload: { error },
  };
};

const getAllEvents = () => {
  return async (dispatch) => {
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

const getEventDetails = (eventId) => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    dispatch(getEventDetailsInProgress());
    try {
      const response = await fetch(`${API_V1_BASE_URL}/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      console.log("data", data);
      if (data.status === "success") {
        dispatch(getEventDetailsSuccess(eventId, data.data.eventInfo));
      } else {
        dispatch(getEventDetailsFailure(data.data.errorDesc));
      }
    } catch (error) {
      dispatch(getEventDetailsFailure(error.message));
    }
  };
};

export { getAllEvents, getEventDetails };
