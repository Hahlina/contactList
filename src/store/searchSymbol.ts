import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Search = {
  value: string;
};

const initialState: Search = {
  value: "",
};

const searchSymbolSlice = createSlice({
  name: "searchSymbolSlice",
  initialState,
  reducers: {
    addSymbol(state, action: PayloadAction<Search>) {
      state.value = action.payload.value.toLowerCase();
    },
  },
});

export const { addSymbol } = searchSymbolSlice.actions;

export default searchSymbolSlice.reducer;
