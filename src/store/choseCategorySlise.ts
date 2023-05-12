import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Category = {
  value: string;
  label: string;
};
type CategoryState = {
  category: Category;
};
const initialState: CategoryState = {
  category: {
    value: "allContacts",
    label: "All contacts",
  },
};
const categorySlice = createSlice({
  name: "choseCategory",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.category = {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
