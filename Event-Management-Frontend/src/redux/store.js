import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, thunk],
});

export const persistor = persistStore(store);
