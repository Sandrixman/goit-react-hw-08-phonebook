import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './contactsSlice';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    phonebook: phonebookSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
