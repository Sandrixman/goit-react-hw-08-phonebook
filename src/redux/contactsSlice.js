import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    filter: '',
  },
  reducers: {
    findContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { findContact } = phonebookSlice.actions;
