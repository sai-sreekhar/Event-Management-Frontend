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

const hostEventInProgress = () => {
  return {
    type: eventActions.HOST_EVENT_IN_PROGRESS,
  };
};

const hostEventSuccess = () => {
  return {
    type: eventActions.HOST_EVENT_SUCCESS,
  };
};

const hostEventFailure = (error) => {
  return {
    type: eventActions.HOST_EVENT_FAILURE,
    payload: { error },
  };
};

const buyTicketInProgress = () => {
  return {
    type: eventActions.BUY_TICKET_IN_PROGRESS,
  };
};

const buyTicketSuccess = () => {
  return {
    type: eventActions.BUY_TICKET_SUCCESS,
  };
};

const buyTicketFailure = (error) => {
  return {
    type: eventActions.BUY_TICKET_FAILURE,
    payload: { error },
  };
};

const getAllBookingsInProgress = () => {
  return {
    type: eventActions.GET_ALL_BOOKINGS_IN_PROGRESS,
  };
};

const getAllBookingsSuccess = (bookedEvents) => {
  return {
    type: eventActions.GET_ALL_BOOKINGS_SUCCESS,
    payload: { bookedEvents },
  };
};

const getAllBookingsFailure = (error) => {
  return {
    type: eventActions.GET_ALL_BOOKINGS_FAILURE,
    payload: { error },
  };
};

const deleteEventBookingInProgress = () => {
  return {
    type: eventActions.DELETE_EVENT_BOOKING_IN_PROGRESS,
  };
};

const deleteEventBookingSuccess = () => {
  return {
    type: eventActions.DELETE_EVENT_BOOKING_SUCCESS,
  };
};

const deleteEventBookingFailure = (error) => {
  return {
    type: eventActions.DELETE_EVENT_BOOKING_FAILURE,
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

const hostEvent = (eventDetails) => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    dispatch(hostEventInProgress());
    try {
      const response = await fetch(`${API_V1_BASE_URL}/myEvents`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventDetails),
      });
      const data = await response.json();
      if (data.status === "success") {
        dispatch(hostEventSuccess());
      } else {
        dispatch(hostEventFailure(data.data.errorDesc));
      }
    } catch (error) {
      dispatch(hostEventFailure(error.message));
    }
  };
};

const buyTicket = (eventId) => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    dispatch(buyTicketInProgress());
    try {
      const response = await fetch(
        `${API_V1_BASE_URL}/registrations/${eventId}/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        dispatch(buyTicketSuccess());
      } else {
        dispatch(buyTicketFailure(data.data.errorDesc));
      }
    } catch (error) {
      dispatch(buyTicketFailure(error.message));
    }
  };
};

const getAllBookings = () => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    dispatch(getAllBookingsInProgress());
    try {
      const response = await fetch(`${API_V1_BASE_URL}/registrations`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (data.status === "success") {
        dispatch(getAllBookingsSuccess(data.data.registeredEvents));
      } else {
        dispatch(getAllBookingsFailure(data.data.errorDesc));
      }
    } catch (error) {
      dispatch(getAllBookingsFailure(error.message));
    }
  };
};

const deleteEventBooking = (eventId) => {
  return async (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;
    dispatch(deleteEventBookingInProgress());
    try {
      const response = await fetch(
        `${API_V1_BASE_URL}/registrations/${eventId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        dispatch(deleteEventBookingSuccess());
      } else {
        dispatch(deleteEventBookingFailure(data.data.errorDesc));
      }
    } catch (error) {
      dispatch(deleteEventBookingFailure(error.message));
    }
  };
};

export { getAllEvents, getEventDetails, hostEvent, buyTicket, getAllBookings, deleteEventBooking};
