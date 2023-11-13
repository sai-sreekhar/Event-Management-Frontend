export const eventActions = {
  GET_ALL_EVENTS_IN_PROGRESS: "@event/getAllEventsInProgress",
  GET_ALL_EVENTS_SUCCESS: "@event/getAllEventsSuccess",
  GET_ALL_EVENTS_FAILURE: "@event/getAllEventsFailure",
  GET_EVENT_DETAILS_IN_PROGRESS: "@event/getEventDetailsInProgress",
  GET_EVENT_DETAILS_SUCCESS: "@event/getEventDetailsSuccess",
  GET_EVENT_DETAILS_FAILURE: "@event/getEventDetailsFailure",
};

export const apiStatus = {
  IN_PROGRESS: 0,
  SUCCESS: 1,
  FAILURE: 2,
  IDLE: 3,
};
