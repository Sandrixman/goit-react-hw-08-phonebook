import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Phonebook'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Phonebook'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Phonebook'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Phonebook'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;
