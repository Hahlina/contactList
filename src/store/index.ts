import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlise";
import categorySlice from "./choseCategorySlise";
import searchSymbolSlice from "./searchSymbol";
const store = configureStore({
  reducer: {
    contactList: contactSlice,
    categorySlice: categorySlice,
    searchSymbolSlice: searchSymbolSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
