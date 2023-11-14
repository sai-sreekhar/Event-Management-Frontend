export const eventActions = {
  GET_ALL_EVENTS_IN_PROGRESS: "@event/getAllEventsInProgress",
  GET_ALL_EVENTS_SUCCESS: "@event/getAllEventsSuccess",
  GET_ALL_EVENTS_FAILURE: "@event/getAllEventsFailure",
  GET_EVENT_DETAILS_IN_PROGRESS: "@event/getEventDetailsInProgress",
  GET_EVENT_DETAILS_SUCCESS: "@event/getEventDetailsSuccess",
  GET_EVENT_DETAILS_FAILURE: "@event/getEventDetailsFailure",
  HOST_EVENT_IN_PROGRESS: "@event/hostEventInProgress",
  HOST_EVENT_SUCCESS: "@event/hostEventSuccess",
  HOST_EVENT_FAILURE: "@event/hostEventFailure",
  BUY_TICKET_IN_PROGRESS: "@event/buyTicketInProgress",
  BUY_TICKET_SUCCESS: "@event/buyTicketSuccess",
  BUY_TICKET_FAILURE: "@event/buyTicketFailure",
  GET_ALL_BOOKINGS_IN_PROGRESS: "@event/getAllBookingsInProgress",
  GET_ALL_BOOKINGS_SUCCESS: "@event/getAllBookingsSuccess",
  GET_ALL_BOOKINGS_FAILURE: "@event/getAllBookingsFailure",
  DELETE_EVENT_BOOKING_IN_PROGRESS: "@event/deleteEventBookingInProgress",
  DELETE_EVENT_BOOKING_SUCCESS: "@event/deleteEventBookingSuccess",
  DELETE_EVENT_BOOKING_FAILURE: "@event/deleteEventBookingFailure",
};

export const apiStatus = {
  IN_PROGRESS: 0,
  SUCCESS: 1,
  FAILURE: 2,
  IDLE: 3,
};

export const eventOperations = {
  GET_ALL_EVENTS: "getAllEvents",
  GET_EVENT_DETAILS: "getEventDetails",
  HOST_EVENT: "hostEvent",
  BUY_TICKET: "buyTicket",
  GET_ALL_BOOKINGS: "getAllBookings",
  DELETE_EVENT_BOOKING: "deleteEventBooking",
  INVALID: "invalid",
};
