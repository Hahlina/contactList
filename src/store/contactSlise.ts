import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
  id: string;
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  category: string;
  gender: string;
  favorite: boolean;
};
type ContactState = {
  list: Contact[];
};
const initialState: ContactState = {
  list: [],
};
const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.list.push(action.payload);
    },
  },
});
export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
