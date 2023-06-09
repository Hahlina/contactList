import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initContact } from "./initContact";

type Contact = {
  id: string;
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  category: string;
  gender: string;
  favorite: boolean;
  photo: string;
};
type ContactState = {
  list: Contact[];
};
const initialState: ContactState = {
  list: initContact,
};
const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.list.push(action.payload);
    },
    removeContact(state, action: PayloadAction<string>) {
      const updatedList = state.list.filter(
        (contact) => contact.id !== action.payload
      );
      state.list = updatedList;
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const { id, ...newData } = action.payload; // Видаляємо id з даних для оновлення
      const index = state.list.findIndex((contact) => contact.id === id); // Знаходимо індекс контакту за його id
      if (index !== -1) {
        // Якщо знайшли контакт, то оновлюємо його
        state.list[index] = {
          ...state.list[index],
          ...newData,
        };
      }
    },
    changeStatus(state, action: PayloadAction<string>) {
      const changeStatus = state.list.find(
        (contact) => contact.id === action.payload
      );
      if (changeStatus) {
        changeStatus.favorite = !changeStatus.favorite;
      }
    },
  },
});
export const { addContact, removeContact, updateContact, changeStatus } =
  contactSlice.actions;
export default contactSlice.reducer;
