import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./share_components/redux/authSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import appSlice from "./share_components/redux/appSlice";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: "user",
  version: 1,
  storage,
};
const reducers = combineReducers({ authSlice, appSlice });
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
