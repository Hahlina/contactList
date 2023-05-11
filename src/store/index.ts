import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlise";

const store = configureStore({
  reducer: {
    contactList: contactSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
